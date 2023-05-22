import { TasksService } from './tasks.service';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { Prisma } from '@prisma/client';
export declare class TasksController {
    private tasksServices;
    constructor(tasksServices: TasksService);
    createTask(info: Prisma.TaskCreateInput): Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    getTasks(filterDto: GetTasksFilterDto): Promise<import(".prisma/client").Task[]>;
    addTaskToUser(uId: Prisma.UserWhereUniqueInput, tId: Prisma.TaskWhereUniqueInput): Promise<void>;
}
