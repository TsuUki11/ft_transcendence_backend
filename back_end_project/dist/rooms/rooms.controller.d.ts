import { RoomsService } from './rooms.service';
import { createRoomDto } from '../dto/room/createRoomDto';
export declare class RoomsController {
    private roomsService;
    constructor(roomsService: RoomsService);
    createRoom(roomInfo: createRoomDto): Promise<void>;
    joinRoom(roomId: number, userId: number): Promise<void>;
    getRoomMessages(roomId: number): Promise<{
        createdAt: Date;
        content: string;
        createdBy: {
            username: string;
        };
    }[]>;
}
