import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
