import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './typeorm/entities/task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../users/typeorm/entities/user.entity';
export declare class TasksService {
    private taskRepository;
    private userRepository;
    constructor(taskRepository: Repository<Task>, userRepository: Repository<User>);
    getAllTasks(): Promise<Task[]>;
    createTask(task_info: CreateTaskDto): Promise<Task>;
    deleteTaskById(id: number): Promise<Task[]>;
    updateStatus(id: number, updateTask: TaskStatus): Promise<import("typeorm").UpdateResult>;
    addTaskForUser(uId: number, tId: number): Promise<User>;
}
