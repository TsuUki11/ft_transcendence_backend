import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Client } from 'socket.io/dist/client';

@Injectable()
export class MessagesService {
	messages: Message[] = [{name: 'tsuki', text: 'Hello, from tsuki'}];
	idToUser = {};

	async create(createMessageDto: CreateMessageDto, client: Socket) {
		const message = {
			name: this.idName(client.id),
			text: createMessageDto.text,
		};
		this.messages.push(message);
		return message;
	}

	findAll() {
		return this.messages;
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

	}

	remove(id: number) {
		return `This action removes a #${id} message`;
	}
}
