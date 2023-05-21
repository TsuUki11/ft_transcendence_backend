import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './typeorm/entities/task.entity';
import { User } from '../users/typeorm/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, User]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
