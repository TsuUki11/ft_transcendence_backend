import { MessagesService } from './messages.service';
import { createMessageDto } from '../dto/message/createMessageDto';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    createMessage(messageInfo: createMessageDto): Promise<void>;
    getMessagesInTheRoom(roomId: number, take: number): Promise<{
        createdAt: Date;
        content: string;
        createdBy: {
            username: string;
        };
    }>;
}
