import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.servise';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
