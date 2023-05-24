import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
import { Client } from 'socket.io/dist/client';

@WebSocketGateway( {cors: { origin: '*', }, } )
export class MessagesGateway {
  @WebSocketServer()
	server: Server
  constructor(private readonly messagesService: MessagesService) {}


  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto, @ConnectedSocket() client: Socket) {
    console.log(createMessageDto);
    const message = await this.messagesService.create(createMessageDto, client);
    this.server.emit('message', message);

  }

  @SubscribeMessage('findAllMessages')
  findAll(@MessageBody() body) {
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
  async isTyping(@MessageBody('isTyping') isTyping: boolean, @ConnectedSocket() client: Socket) {
    console.log ("typing");
    const name = await this.messagesService.idName(client.id);
		client.broadcast.emit("isTyping", {name, isTyping});
    // return this.messagesService.isTyping(isTyping__, client)
  }


  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messagesService.remove(id);
  }
}
