import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class createMessageDto {
    @IsNotEmpty()
    messageContent: string

    @IsInt()
    userId: number
    
    @IsInt()
    roomId: number
}