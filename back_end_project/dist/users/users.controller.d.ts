import { createUserDto } from "./dto/create-user-dto";
import { UsersService } from "./users.service";
import { Prisma, User } from "@prisma/client";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user_Info: createUserDto): Promise<User>;
    createRoom(id: number, otherId: number, roomName: string): Promise<void>;
    getUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
    deleteAll(): void;
}
