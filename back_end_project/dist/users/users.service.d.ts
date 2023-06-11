import { createUserDto } from "../dto/user/create-user-dto";
import { PrismaService } from "../prisma/prisma.servise";
import { Prisma, User } from "@prisma/client";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: createUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    getUserConversationInbox(userId: number): Promise<{
        rooms: {
            messages: {
                createdAt: Date;
                content: string;
                createdBy: {
                    username: string;
                    id: number;
                };
            }[];
            whoJoined: {
                username: string;
                profilePicture: string;
                id: number;
            }[];
        }[];
    }>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void>;
    deleteAll(): Promise<void>;
}
