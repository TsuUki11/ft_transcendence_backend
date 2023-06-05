import {
  Body,
  Controller,
  Delete,
  Get,
  Optional,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { createUserDto } from "../dto/user/create-user-dto";
import { UsersService } from "./users.service";
import { Prisma, User } from "@prisma/client";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() user_Info: createUserDto) {
    return this.usersService.createUser(user_Info);
  }
  
  @Get("/getUser/:id")
  getUser(@Param("id") id: Prisma.UserWhereUniqueInput) {
    return this.usersService.getUser(id);
  }
  
  @Get("/getUserInbox")
  getUserInbox(@Body("userId", ParseIntPipe) userId:number) {
    return this.usersService.getUserInbox(userId);
  }

  @Delete("/all")
  deleteAll() {
    this.usersService.deleteAll();
  }
    // @Get()
    // getAllUsers() {
    //   return this.usersService.getAllUsers();
    // }

  // @Patch("/:id")
  // updateUser(
  //   @Param("id", ParseIntPipe) id: number,
  //   @Body() updateInfo: Prisma.UserUpdateInput
  // ) {
  //   return this.usersService.updateUser({ id }, updateInfo);
  // }


  // @Delete("/:id")
  // deleteUser(@Param("id", ParseIntPipe) id: number) {
  //   this.usersService.deleteUser({ id });
  // }
}
