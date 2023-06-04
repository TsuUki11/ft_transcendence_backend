import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { PrismaService } from '../prisma/prisma.servise';

@Module({
  controllers: [RoomsController],
  providers: [PrismaService, RoomsService]
})
export class RoomsModule {}
