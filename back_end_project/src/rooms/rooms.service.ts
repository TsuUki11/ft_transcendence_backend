import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Message } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.servise';
import { createRoomDto } from '../dto/room/createRoomDto';
import { take } from 'rxjs';

@Injectable()
export class RoomsService {
    constructor (private prisma: PrismaService) {}

	async getRoomMessages(roomId: number) {
		const messages = await this.prisma.message.findMany({
			orderBy: {
				createdAt: "desc"
			},
			take: 10,
			where: {
				roomId,
			},
			select: {
				content: true,
				createdAt: true,
				createdBy: {
					select: {
						username: true,
					}
				}
			}
		})
		if (!messages) {
			throw new NotFoundException("No messages found in this room");
		}
		return messages;
	}

    async createRoom(roomInfo: createRoomDto) {
		let {userId, ...roomInfo__} = roomInfo;

		userId = Number(userId);
		const newRoom = await this.prisma.room.create({
			data: {
				room_name: roomInfo__.groupName,
				whoJoined: {
					connect: {id: userId}
				},
			}
		})
		this.addRoomToInbox(newRoom.id, userId);
		if (roomInfo__.joinWithId) {
			let otherId = roomInfo__.joinWithId;
			otherId = Number(otherId);
			this.addUserToTheRoom(newRoom.id, otherId);
		}
	}

	async joinRoom(roomId: number, userId: number) {
		this.addUserToTheRoom(roomId, userId);
		this.addRoomToInbox(roomId, userId);
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
