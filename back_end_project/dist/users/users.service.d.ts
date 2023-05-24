import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(info: createUserDto): Promise<User>;
}
