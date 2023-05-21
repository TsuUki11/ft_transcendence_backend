import { IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;
}