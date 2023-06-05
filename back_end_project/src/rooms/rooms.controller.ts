import { Body, Controller, Optional, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { createRoomDto } from '../dto/room/createRoomDto';

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
}
