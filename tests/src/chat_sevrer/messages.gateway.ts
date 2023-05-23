import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server, Socket } from 'socket.io';
import { Client } from 'socket.io/dist/client';

@WebSocketGateway( {cors: { origin: '*', }, } )
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}


  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  // @SubscribeMessage('findOneMessage')
  // findOne(@MessageBody() id: number) {
  //   return this.messagesService.findOne(id);
  // }

  // @SubscribeMessage('updateMessage')
  // update(@MessageBody() updateMessageDto: UpdateMessageDto) {
  //   return this.messagesService.update(updateMessageDto.id, updateMessageDto);
  // }

  @SubscribeMessage('joinRoom')
  joinRoom(@MessageBody('name') name: string, @ConnectedSocket() client: Socket) {
    return this.messagesService.joinRoom(name, client);
  }
  
  @SubscribeMessage('isTyping')
  isTyping(@MessageBody('isTyping') isTyping__: boolean, @ConnectedSocket() client: Socket) {
    return this.messagesService.isTyping(isTyping__, client)
  }


  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messagesService.remove(id);
  }
}
