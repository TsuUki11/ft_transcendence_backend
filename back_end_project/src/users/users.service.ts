import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection, getRepository } from "typeorm";
import { createUserDto } from "../dto/user/create-user-dto";
import { PrismaService } from "../prisma/prisma.servise";
import { Prisma, User } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";
import { combineLatest } from "rxjs";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: createUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({ data });
    await this.prisma.inbox.create({
      data: {
        inboxOf: { connect: { id: newUser.id } },
      },
    });
    const newUserInfo = await this.prisma.user.findUnique({
      where: { id: newUser.id },
    });
    if (newUserInfo) return newUserInfo;
    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    const user = await this.prisma.user.findUniqueOrThrow({ where });
    return user;
  }

  async updateUser(
    id: Prisma.UserWhereUniqueInput,
    updateInfo: Prisma.UserUpdateInput
  ): Promise<User> {
    const user = await this.prisma.user.update({
      where: id,
      data: updateInfo,
    });
    return user;
  }

  async getUserInbox(userId: number) {
    const inbox = await this.prisma.user.findUnique({
      where: {id: userId},
      select: {
        inbox: {
          select: {
            rooms: {
              select: {
                room_name: true,
                whoJoined: {
                  skip: 1,
                  take: 1,
                  select: {
                    username: true,
                  }
                },
                messages: {
                  select: {
                    content: true,
                  },
                  orderBy: {
                    createdAt: "desc"
                  },
                  take: 1,
                }
              }
            }
          }
        },
      }
    })
    return inbox;
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.delete({ where });
  }

  async deleteAll() {
    await this.prisma.message.deleteMany();
    await this.prisma.room.deleteMany();
    await this.prisma.inbox.deleteMany();
    await this.prisma.user.deleteMany();
  }
}
