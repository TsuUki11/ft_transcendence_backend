import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(info: createUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    deleteAllUsers(): Promise<void>;
    followTheUser(id: number, followedId: number): Promise<void>;
}
