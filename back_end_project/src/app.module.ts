import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './chat_sevrer/messages.module';

console.log()
@Module({
  imports: [
    // UsersModule,
    MessagesModule,
  ],
  controllers: [],
  providers:[]
})
export class AppModule {}
