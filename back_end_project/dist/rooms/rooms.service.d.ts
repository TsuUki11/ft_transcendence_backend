import { PrismaService } from '../prisma/prisma.servise';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    createRoom(id: number, otherId: number, roomName: string): Promise<void>;
    joinRoom(roomId: number, userId: number): Promise<void>;
    addRoomToInbox(roomId: number, userId: number): Promise<void>;
    addUserToTheRoom(roomId: number, userId: number): Promise<void>;
}
