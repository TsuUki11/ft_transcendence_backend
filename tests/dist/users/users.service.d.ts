import { PrismaService } from '../prisma/prisma.servise';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<void>;
    getAllUsers(): Promise<import(".prisma/client").User[]>;
    getUser(where: Prisma.UserWhereUniqueInput): Promise<import(".prisma/client").User>;
    updateUser(id: number, updateInfo: Prisma.UserUpdateInput): Promise<import(".prisma/client").User>;
}
