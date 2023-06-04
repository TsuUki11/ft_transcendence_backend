import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: createUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void>;
    deleteAll(): Promise<void>;
    createRoom(id: number, otherId: number, roomName: string): Promise<void>;
    addRoomToInbox(roomId: number, userId: number): Promise<void>;
    addUserToTheRoom(roomId: number, userId: number): Promise<void>;
}
