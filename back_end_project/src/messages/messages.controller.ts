import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { createMessageDto } from '../dto/message/createMessageDto';

@Controller('messages')
export class MessagesController {
    constructor (private messagesService: MessagesService) {}

    @Post('/createMessage')
    // createMessage(@Body() messageInfo: createMessageDto) {
    createMessage(
        @Body('messageContent') messageContent: string,
        @Body('userId', ParseIntPipe) userId: number,
        @Body('roomId', ParseIntPipe) roomId: number) {
        
        // return this.messagesService.createMessage(messageInfo);
        return this.messagesService.createMessage(messageContent, userId, roomId);
    }
}
