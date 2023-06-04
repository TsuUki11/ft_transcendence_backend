import { Body, Controller, Optional, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
    constructor (private roomsService: RoomsService) {}

    @Post("/createRoom/:id")
    createRoom(
      @Param('id', ParseIntPipe) id: number,
      @Optional() @Body('join', ParseIntPipe) otherId: number,
      @Body('groupName') @Optional() roomName: string) {
      return this.roomsService.createRoom(id, otherId, roomName);
    }

    @Post("/joinRoom/:id")
    joinRoom(
      @Param('id', ParseIntPipe) roomId: number,
      @Body('userId', ParseIntPipe) userId: number
    ) {
      return this.roomsService.joinRoom(roomId, userId);
    }
}
