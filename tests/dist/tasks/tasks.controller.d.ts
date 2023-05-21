import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { Task } from './typeorm/entities/task.entity';
import { TaskStatus } from './task-status.enum';
import { User } from '../users/typeorm/entities/user.entity';
export declare class TasksController {
    private tasksServices;
    constructor(tasksServices: TasksService);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    updateStatus(id: number, status: TaskStatus): Promise<import("typeorm").UpdateResult>;
    addTaskToUser(uId: number, tId: number): Promise<User>;
    deleteTaskById(id: number): Promise<Task[]>;
}
