import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, Task, User } from '@prisma/client';

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

	async deleteUser(where: Prisma.UserWhereUniqueInput) {
		const user = await this.prisma.user.delete({ where })
	}
}
