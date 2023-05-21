import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { Task } from './typeorm/entities/task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { updateTaskDto } from './dto/update-task-dto';
import { User } from '../users/typeorm/entities/user.entity';
import { retry } from 'rxjs';

@Injectable()
export class TasksService {
	constructor (@InjectRepository(Task)private taskRepository: Repository<Task>,
				@InjectRepository(User)private userRepository: Repository<User>) {}
	
	// private Tasks: Task[] = [];
	// async getTaskById(id: number): Promise<Task>{
	// 	const task_found = this.taskRepository.findOne({where: {id}});
	// 	if (!task_found)
	// 		throw new NotFoundException();
	// 	return task_found;
	// }
	
	async getAllTasks(): Promise<Task[]> {
		return await this.taskRepository.find();
	}

	createTask(task_info: CreateTaskDto): Promise<Task > {
		const newTask = this.taskRepository.create({ ...task_info});
		return this.taskRepository.save(newTask);
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


	async deleteTaskById(id: number) : Promise<Task[]> {
		await this.taskRepository.delete({ id });
	    return this.getAllTasks();
	}

	async updateStatus(id: number,  updateTask: TaskStatus) {
		return await this.taskRepository.update( { id }, { status: updateTask });
	}

	async addTaskForUser(uId: number, tId: number): Promise<User> {
		const user = await this.userRepository.findOneBy({ id: uId });
		if (!user)
			throw new NotFoundException(`No user found by the id: ${uId} !!`);
		const task = await this.taskRepository.findOneBy({ id: tId });
		if (!task)
			throw new NotFoundException(`No task found by the id: ${tId} !!`);
		user.task = task;
		this.userRepository.save(user);
		return user;
	}
}
