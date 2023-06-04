import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import { MessagesModule } from './chat_sevrer/messages.module';
import { RoomsModule } from './rooms/rooms.module';
import { MessagesModule } from './messages/messages.module';

console.log()
@Module({
  imports: [
    UsersModule,
    MessagesModule,
    RoomsModule,
  ],
  controllers: [],
  providers:[]
})
export class AppModule {}
