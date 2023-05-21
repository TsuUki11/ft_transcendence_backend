import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './typeorm/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from '../prisma/prisma.servise';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService]
})
export class UsersModule {}
