import { BaseEntity } from "typeorm";
import { Task } from "../../../tasks/typeorm/entities/task.entity";
export declare class User extends BaseEntity {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    task: Task;
}
