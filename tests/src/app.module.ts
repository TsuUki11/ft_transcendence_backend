import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

console.log()
@Module({
  imports: [
    TasksModule,
    UsersModule,

  ],
  controllers: [],
})
export class AppModule {}
