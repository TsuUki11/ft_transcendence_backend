import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@Injectable()
export class MessagesService {
	@WebSocketServer()
	server: Server
	messages: Message[] = [{name: 'tsuki', text: 'Hello, from tsuki'}];
	idToUser = {};

	async create(createMessageDto: CreateMessageDto) {
		const message = createMessageDto;
		this.messages.push(message);
		this.server.emit('message', message);
		return message;
	}

	findAll() {
		return `This action returns all messages`;
	}

	// findOne(id: number) {
	//   return `This action returns a #${id} message`;
	// }

	// update(id: number, updateMessageDto: UpdateMessageDto) {
	//   return `This action updates a #${id} message`;
	// }

	idName(id: string): string {
		return this.idToUser[id];
	}

	async joinRoom(name: string, client: Socket) {
		this.idToUser[client.id] = name;
		return Object.values(this.idToUser)
	}

	async isTyping(isTyping__: boolean, client: Socket) {
		const name = await this.idName(client.id);
		client.broadcast.emit("typing", {name, isTyping__});
	}

	remove(id: number) {
		return `This action removes a #${id} message`;
	}
}
