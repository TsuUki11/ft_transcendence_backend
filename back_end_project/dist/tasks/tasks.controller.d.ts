import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { Prisma } from '@prisma/client';
export declare class TasksController {
    private tasksServices;
    constructor(tasksServices: TasksService);
    createTask(info: Prisma.TaskCreateInput): any;
    getTasks(filterDto: GetTasksFilterDto): Promise<any>;
    addTaskToUser(uId: number, tId: number): Promise<void>;
}
