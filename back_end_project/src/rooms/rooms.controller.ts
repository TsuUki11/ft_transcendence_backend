import { Body, Controller, Optional, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
    constructor (private roomsService: RoomsService) {}

    @Post("/createRoom/:id")
    createRoom(
      @Param('id', ParseIntPipe) id: number,
      @Body('join', ParseIntPipe) @Optional() otherId: number,
      @Body('groupName') @Optional() roomName: string) {
      return this.roomsService.createRoom(id, otherId, roomName);
    }
}
