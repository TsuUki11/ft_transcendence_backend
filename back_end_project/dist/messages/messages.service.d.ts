import { PrismaService } from '../prisma/prisma.servise';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    createMessage(messageContent: string, userId: number, roomId: number): Promise<void>;
}
