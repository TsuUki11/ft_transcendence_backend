import { PrismaService } from '../prisma/prisma.servise';
import { createRoomDto } from '../dto/room/createRoomDto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    getRoomMessages(roomId: number): Promise<{
        createdAt: Date;
        content: string;
        createdBy: {
            username: string;
        };
    }[]>;
    createRoom(roomInfo: createRoomDto): Promise<void>;
    joinRoom(roomId: number, userId: number): Promise<void>;
    addRoomToInbox(roomId: number, userId: number): Promise<void>;
    addUserToTheRoom(roomId: number, userId: number): Promise<void>;
}
