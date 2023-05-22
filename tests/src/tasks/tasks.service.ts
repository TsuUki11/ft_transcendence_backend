import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { updateTaskDto } from './dto/update-task-dto';
import { retry } from 'rxjs';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.servise';

@Injectable()
export class TasksService {
	constructor (private prisma: PrismaService) {}
	
	// private Tasks: Task[] = [];
	// async getTaskById(id: number): Promise<Task>{
	// 	const task_found = this.taskRepository.findOne({where: {id}});
	// 	if (!task_found)
	// 		throw new NotFoundException();
	// 	return task_found;
	// }
	
	async getAllTasks() {
		return await this.prisma.task.findMany();
	}

	createTask(task_info: Prisma.TaskCreateInput) {
		const newTask = this.prisma.task.create({ data: task_info });
		return newTask;
	}
	// getTaskById(id: string) : Task {
	//     const task_found = this.Tasks.find(tasks => tasks.id == id);
	// }
	// getAllTasks(): Task[] {
	//     return this.Tasks;
	// }

	// getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
	//     const { status, search} = filterDto;

	//     let tasks = this.Tasks;
	//     if (status)
	//         tasks = tasks.filter(task => task.status === status)
	//     if (search)
	//         tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search))
	//     return tasks; 
	// }

	// createTask(taskDto: CreateTaskDto): Task {
	//     const { title, description} = taskDto;
	//     const task: Task = {
	//         id: uuid(),
	//         title,
	//         description, 
	//         status: TaskStatus.OPEN,
	//     }
	//     this.Tasks.push(task);
	//     return task;
	// }


	// async deleteTaskById(id: number) : Promise<Task[]> {
	// 	await this.taskRepository.delete({ id });
	//     return this.getAllTasks();
	// }

	// async updateStatus(id: number,  updateTask: TaskStatus) {
	// 	return await this.taskRepository.update( { id }, { status: updateTask });
	// }

	async addTaskForUser(uId: Prisma.UserWhereUniqueInput, tId: Prisma.TaskWhereUniqueInput) {
		// const user = await this.prisma.user.findUnique({ where: uId });
		// const task = await this.prisma.task.findUnique({ where: tId });
		this.prisma.user.update({
			where: uId,
			data: tId
		})
	}
}
