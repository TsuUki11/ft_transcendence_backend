import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { Prisma, Task, User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService) {}
    
    @Post()
    createUser(@Body() user_Info: Prisma.UserCreateInput) {
        this.usersService.createUser(user_Info);
    }

    @Get()
    getAllUsers()  {
        return this.usersService.getAllUsers();
    }

    @Get("/:id")
    getUser(@Param('id') id: Prisma.UserWhereUniqueInput)  {
        return this.usersService.getUser(id);
    }

    @Patch("/:id")
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateInfo: Prisma.UserUpdateInput) {
        return this.usersService.updateUser({ id }, updateInfo);
    }

    @Patch("/add/:uId")
    createTaskForUser(@Param('uId', ParseIntPipe) id: number, @Body() taskInfo: Prisma.TaskCreateInput) {
        return this.usersService.createTaskForUser(id, taskInfo);
    }

    @Delete("/:id")
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        this.usersService.deleteUser({ id });
    }
}
