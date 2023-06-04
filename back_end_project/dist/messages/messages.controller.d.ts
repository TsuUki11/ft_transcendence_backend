import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    createMessage(messageContent: string, userId: number, roomId: number): Promise<void>;
}
