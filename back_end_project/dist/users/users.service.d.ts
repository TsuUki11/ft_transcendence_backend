import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, Task, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    createTaskForUser(uId__: number, taskInfo: Prisma.TaskCreateInput): Promise<User & {
        task: Task[];
    }>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void>;
}
