import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user_Info: Prisma.UserCreateInput): void;
    getAllUsers(): Promise<User[]>;
    getUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
    updateUser(id: number, updateInfo: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): void;
}
