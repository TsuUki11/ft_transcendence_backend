import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class createRoomDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number
    
    @IsOptional()
    @IsNumber()
    joinWithId: number
    
    @IsOptional()
    @IsNotEmpty()
    groupName: string
}