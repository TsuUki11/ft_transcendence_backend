import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, Task, User } from '@prisma/client';
import { connect } from 'http2';
import { title } from 'process';

@Injectable()
export class UsersService {
	// constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
	constructor(private prisma: PrismaService) {}

	async createUser(data: Prisma.UserCreateInput): Promise<User> {
		// const newUser = this.userRepository.create({ ...user_Info });
		// return this.userRepository.save(newUser);
		console.log("CREATE CALLED");
		const newUser = await this.prisma.user.create( {data} );
		return newUser;
	}

	async getAllUsers(): Promise<User[]>  {
		const users = await this.prisma.user.findMany({ include: { task: true } });
		return users;
	}

	async getUser(where: Prisma.UserWhereUniqueInput): Promise<User>  {
		const user = await this.prisma.user.findUniqueOrThrow({ where });
		return user;
	}

	async updateUser(id: Prisma.UserWhereUniqueInput, updateInfo: Prisma.UserUpdateInput): Promise<User>  {
		const user = await this.prisma.user.update({
			where: id,
			data: updateInfo,
			include : {task: true}
		})
		return user;
	}

	async createTaskForUser(uId__: number, taskInfo: Prisma.TaskCreateInput) {
		console.log(taskInfo);
		// const user = await this.prisma.user.findUnique({ where: {id: uId__} });
		await this.prisma.user.update( {
			where: { id: uId__},
			data: {
				task: {create: {
					description: taskInfo.description,
					title: taskInfo.title,
				}}
			}
		})
		const user = this.prisma.user.findUnique( {
			where: {id: uId__},
			include: {task: true}
		})
		// const task = await this.prisma.task.update({
		// 	where: {id: created_task.id},
		// 	data: {user: {connect: { id: uId__ }}}
		// })
		return user;
		// const user = await this.prisma.user.update({
		// 	where: {id: uId},
		// 	data: {task: connect{ uId: uId}},
		// })
	}
	async deleteUser(where: Prisma.UserWhereUniqueInput) {
		const user = await this.prisma.user.delete({ where })
	}
}
