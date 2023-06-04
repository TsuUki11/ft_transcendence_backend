import { RoomsService } from './rooms.service';
export declare class RoomsController {
    private roomsService;
    constructor(roomsService: RoomsService);
    createRoom(id: number, otherId: number, roomName: string): Promise<void>;
}
