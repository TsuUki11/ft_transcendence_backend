import { createUserDto } from "../dto/user/create-user-dto";
import { UsersService } from "./users.service";
import { Prisma, User } from "@prisma/client";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(user_Info: createUserDto): Promise<User>;
    getUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
    getUserInbox(userId: number): Promise<{
        rooms: {
            messages: {
                createdAt: Date;
                content: string;
                createdBy: {
                    username: string;
                    id: number;
                };
            }[];
            whoJoined: {
                username: string;
                profilePicture: string;
                id: number;
            }[];
        }[];
    }>;
    deleteAll(): void;
}
