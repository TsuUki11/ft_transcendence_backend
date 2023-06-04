import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, User } from '@prisma/client';
import { connect } from 'http2';
import { title } from 'process';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async createUser(data: Prisma.UserCreateInput): Promise<User> {
		const newUser = await this.prisma.user.create( {data} );
		return newUser;
	}

	async getAllUsers(): Promise<User[]>  {
		const users = await this.prisma.user.findMany();
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
		})
		return user;
	}

	async deleteUser(where: Prisma.UserWhereUniqueInput) {
		const user = await this.prisma.user.delete({ where })
	}
}
