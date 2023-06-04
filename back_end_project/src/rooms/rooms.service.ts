import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.servise';

@Injectable()
export class RoomsService {
    constructor (private prisma: PrismaService) {}

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
