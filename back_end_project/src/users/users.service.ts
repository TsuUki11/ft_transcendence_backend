import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, getRepository } from 'typeorm';
import { createUserDto } from './dto/create-user-dto';
import { PrismaService } from '../prisma/prisma.servise';
import { Prisma, User } from '@prisma/client';
import { connect } from 'http2';
import { title } from 'process';
import { opendirSync } from 'fs';

@Injectable()
export class UsersService {
	// constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
	constructor(private prisma: PrismaService) {}

	async createUser(info: createUserDto): Promise<User> {
		const newUser = await this.prisma.user.create( { data: info} );
		return newUser;
	}
}
