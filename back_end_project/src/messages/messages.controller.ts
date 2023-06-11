import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { createMessageDto } from '../dto/message/createMessageDto';

@Controller('messages')
export class MessagesController {
    constructor (private messagesService: MessagesService) {}

    @Post('/createMessage')
    createMessage(@Body() messageInfo: createMessageDto) {
        return this.messagesService.createMessage(messageInfo);
    }

    @Post('/getMessagesInTheRoom/:roomId')
    getMessagesInTheRoom(@Param('roomId', ParseIntPipe) roomId: number, @Body('take') take: number) {
        return this.messagesService.getMessagesInTheRoom(roomId, take);
    }
}
