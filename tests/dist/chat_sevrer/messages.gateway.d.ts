import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
export declare class MessagesGateway {
    private readonly messagesService;
    server: Server;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto, client: Socket): Promise<void>;
    findAll(body: any): import("./entities/message.entity").Message[];
    joinRoom(name: string, client: Socket): Promise<unknown[]>;
    isTyping(isTyping: boolean, client: Socket): Promise<void>;
    remove(id: number): string;
}
