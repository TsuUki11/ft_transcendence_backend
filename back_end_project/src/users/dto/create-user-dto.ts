import { Prisma, User } from '@prisma/client';
import { IsNotEmpty, IsOptional } from "class-validator";
export class createUserDto {
    @IsNotEmpty()
    username:   string

    @IsNotEmpty()
    email:  string

    @IsOptional()
    @IsNotEmpty()
    profile_picture:    string
}