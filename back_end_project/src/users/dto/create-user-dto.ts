import { Prisma, Profile, User } from '@prisma/client';
import { IsNotEmpty, IsOptional } from "class-validator";
export class createUserDto {
    @IsNotEmpty()
    username:   string

    @IsNotEmpty()
    email:  string

}