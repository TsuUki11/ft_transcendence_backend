import { PrismaService } from "../prisma/prisma.servise";
import { createConversationDto } from "../dto/room/createConversationDto";
import { createGroupDto } from "../dto/room/createGroupDto";
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
    createConversation(roomInfo: createConversationDto): Promise<void>;
    createGroup(roomInfo: createGroupDto): Promise<void>;
    joinRoom(roomId: number, userId: number): Promise<void>;
    addRoomToInbox(roomId: number, userId: number): Promise<void>;
    addUserToTheRoom(roomId: number, userId: number): Promise<void>;
}
