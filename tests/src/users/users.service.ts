import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user.entity';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
	// constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
	constructor(private prisma: PrismaService) {}

	async createUser(data: Prisma.UserCreateInput) {
		// const newUser = this.userRepository.create({ ...user_Info });
		// return this.userRepository.save(newUser);
		console.log("CREATE CALLED");
		const newUser = await this.prisma.user.create( {data} );
		console.log(newUser);
	}

	async getAllUsers() {
		const users = await this.prisma.user.findMany();
		return users;
	}

	async getUser(where: Prisma.UserWhereUniqueInput) {
		return await this.prisma.user.findUnique({ where });
	}

	async updateUser(id: number, updateInfo: Prisma.UserUpdateInput) {
		const user = await this.prisma.user.update({ where: { id }, data: updateInfo } )
		return user;
	}
}
