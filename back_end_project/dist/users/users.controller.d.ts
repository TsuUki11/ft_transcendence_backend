import { UsersService } from './users.service';
import { Prisma, Task, User } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user_Info: Prisma.UserCreateInput): void;
    getAllUsers(): Promise<User[]>;
    getUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: number, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    createTaskForUser(id: number, taskInfo: Prisma.TaskCreateInput): Promise<User & {
        task: Task[];
    }>;
    deleteUser(id: number): void;
}
