import { createUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    cerateUser(info: createUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    deleteAllUsers(): void;
    followTheUser(id: number, followedId: number): void;
}
