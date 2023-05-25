import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.servise';

@Module({
  controllers: [ProfilesController],
  providers: [PrismaService, ProfilesService]
})
export class ProfilesModule {}
