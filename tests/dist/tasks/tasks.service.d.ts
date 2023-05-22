import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.servise';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTasks(): Promise<import(".prisma/client").Task[]>;
    createTask(task_info: Prisma.TaskCreateInput): Prisma.Prisma__TaskClient<import(".prisma/client").Task, never>;
    addTaskForUser(uId: Prisma.UserWhereUniqueInput, tId: Prisma.TaskWhereUniqueInput): Promise<void>;
}
