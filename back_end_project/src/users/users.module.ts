import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from '../prisma/prisma.servise';
import { APP_FILTER } from '@nestjs/core';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService],
})
export class UsersModule {}
