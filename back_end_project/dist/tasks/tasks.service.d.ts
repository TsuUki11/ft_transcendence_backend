import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.servise';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTasks(): Promise<any>;
    createTask(task_info: Prisma.TaskCreateInput): any;
    addTaskForUser(uId: number, tId: number): Promise<void>;
}
