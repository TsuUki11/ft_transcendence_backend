import { PrismaService } from '../prisma/prisma.servise';
import { createMessageDto } from '../dto/message/createMessageDto';
export declare class MessagesService {
    private prisma;
    idToUser: {};
    constructor(prisma: PrismaService);
    createMessage(messageInfo: createMessageDto): Promise<void>;
    getMessagesInTheRoom(roomId: number, take: number): Promise<{
        createdAt: Date;
        content: string;
        createdBy: {
            username: string;
        };
    }>;
}
