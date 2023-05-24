import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @Post()
    cerateUser(@Body() info: createUserDto): Promise<User> {
        return this.usersService.createUser(info)
    }
}
