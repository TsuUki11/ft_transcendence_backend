import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user_Info: Prisma.UserCreateInput): void;
    getAllUsers(): Promise<import(".prisma/client").User[]>;
    getUser(id: Prisma.UserWhereUniqueInput): Promise<import(".prisma/client").User>;
    updateUser(id: number, updateInfo: Prisma.UserUpdateInput): Promise<import(".prisma/client").User>;
}
