import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, User } from '@prisma/client';
import { connect } from 'http2';
import { title } from 'process';
import { combineLatest } from 'rxjs';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async createUser(data: createUserDto): Promise<User> {
		const newUser = await this.prisma.user.create({ data });
		await this.prisma.inbox.create({ data: {
			inboxOf: {connect: { id: newUser.id } }
		} })
		const newUserInfo = await this.prisma.user.findUnique({where: {id: newUser.id} });
		if (newUserInfo)
			return newUserInfo;	
		return newUser;
	}

	async getAllUsers(): Promise<User[]>  {
		const users = await this.prisma.user.findMany();
		return users;
	}

	async getUser(where: Prisma.UserWhereUniqueInput): Promise<User>  {
		const user = await this.prisma.user.findUniqueOrThrow({ where });
		return user;
	}

	async updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>  {
		const user = await this.prisma.user.update({
			where: id,
			data: updateInfo,
		})
		return user;
	}

	async deleteUser(where: Prisma.UserWhereUniqueInput) {
		const user = await this.prisma.user.delete({ where })
	}

	async deleteAll() {
		await this.prisma.room.deleteMany();
		await this.prisma.inbox.deleteMany();
		await this.prisma.user.deleteMany();
	}

	async createRoom(id: number, otherId: number, roomName: string) {
		const newRoom = await this.prisma.room.create({
			data: {
				room_name: roomName,
				whoJoined: {
					connect: {id: id}
				},
			}
		})
		this.addRoomToInbox(newRoom.id, id);
		if (otherId)
			this.addUserToTheRoom(newRoom.id, otherId);
	}

	async addRoomToInbox(roomId: number, userId: number) {
		await this.prisma.inbox.update({
			where: {
				userId: userId
			},
			data: {
				rooms: {
					connect: {
						id: roomId
					}
				}
			}
		});
	}

	async addUserToTheRoom(roomId: number, userId: number) {
		await this.prisma.room.update({
			where: {id: roomId},
			data: {
				whoJoined: {
					connect: {
						id: userId,
					}
				}
			}
		});
		this.addRoomToInbox(roomId, userId);
	}
}
