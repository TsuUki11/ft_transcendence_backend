import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { Socket } from 'socket.io';
export declare class MessagesService {
    messages: Message[];
    idToUser: {};
    create(createMessageDto: CreateMessageDto, client: Socket): Promise<{
        name: string;
        text: string;
    }>;
    findAll(): Message[];
    idName(id: string): string;
    joinRoom(name: string, client: Socket): Promise<unknown[]>;
    isTyping(isTyping__: boolean, client: Socket): Promise<void>;
    remove(id: number): string;
}
