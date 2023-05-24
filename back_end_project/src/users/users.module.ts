import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from '../prisma/prisma.servise';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './exceptions_handler';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, {provide: APP_FILTER, useClass: GlobalExceptionFilter,}],
})
export class UsersModule {}
