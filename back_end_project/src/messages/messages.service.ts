import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.servise';
import { createMessageDto } from '../dto/message/createMessageDto';

@Injectable()
export class MessagesService {
    constructor (private prisma: PrismaService) {}

    // async createMessage(messageInfo: createMessageDto) {
    async createMessage(messageContent: string, userId: number, roomId: number) {
        const newMessage = await this.prisma.message.create({
            data: {
                content: messageContent,
                createdBy: {
                    connect: {
                        id: userId,
                    }
                },
                room : {
                    connect: {
                        id: roomId,
                    },
                }
            },
        })
    }
}
