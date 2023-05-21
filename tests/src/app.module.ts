import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';

console.log()
@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmConfig),
    // TasksModule,
    UsersModule,

  ],
  controllers: [],
})
export class AppModule {}
