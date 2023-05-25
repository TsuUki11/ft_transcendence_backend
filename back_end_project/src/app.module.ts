import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './chat_sevrer/messages.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GlobalExceptionFilter } from './exceptions_handler';
import { APP_FILTER } from '@nestjs/core';

console.log()
@Module({
  imports: [
    // TasksModule,
    UsersModule,
    ProfilesModule,
    // MessagesModule,
  ],
  controllers: [],
  providers:[ {provide: APP_FILTER, useClass: GlobalExceptionFilter,} ]
})
export class AppModule {}
