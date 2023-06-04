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
import { createUserDto } from "./dto/create-user-dto";
import { UsersService } from "./users.service";
import { Prisma, User } from "@prisma/client";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() user_Info: createUserDto) {
    return this.usersService.createUser(user_Info);
  }

  @Post("/createRoom/:id")
  createRoom(
    @Param('id', ParseIntPipe) id: number,
    @Body('join', ParseIntPipe) @Optional() otherId: number,
    @Body('groupName') @Optional() roomName: string) {
    return this.usersService.createRoom(id, otherId, roomName);
  }

  // @Get()
  // getAllUsers() {
  //   return this.usersService.getAllUsers();
  // }

  @Get("/:id")
  getUser(@Param("id") id: Prisma.UserWhereUniqueInput) {
    return this.usersService.getUser(id);
  }

  // @Patch("/:id")
  // updateUser(
  //   @Param("id", ParseIntPipe) id: number,
  //   @Body() updateInfo: Prisma.UserUpdateInput
  // ) {
  //   return this.usersService.updateUser({ id }, updateInfo);
  // }

  @Delete("/all")
  deleteAll() {
    this.usersService.deleteAll();
  }

  // @Delete("/:id")
  // deleteUser(@Param("id", ParseIntPipe) id: number) {
  //   this.usersService.deleteUser({ id });
  // }
}
