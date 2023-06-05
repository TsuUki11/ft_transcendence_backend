import { Body, Controller, Get, Optional, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { createRoomDto } from '../dto/room/createRoomDto';
import { promises } from 'dns';
import { Message } from '@prisma/client';

@Controller('rooms')
export class RoomsController {
    constructor (private roomsService: RoomsService) {}

    @Post("/createRoom")
    createRoom(@Body() roomInfo: createRoomDto) {
      return this.roomsService.createRoom(roomInfo);
    }

    @Post("/joinRoom/:id")
    joinRoom(
      @Param('id', ParseIntPipe) roomId: number,
      @Body('userId', ParseIntPipe) userId: number
    ) {
      return this.roomsService.joinRoom(roomId, userId);
    }

    @Get("/getRoomMessages")
    getRoomMessages(@Body("roomId", ParseIntPipe) roomId: number) {
      return this.roomsService.getRoomMessages(roomId);
    }
}
