import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection, getRepository } from "typeorm";
import { createUserDto } from "../dto/user/create-user-dto";
import { PrismaService } from "../prisma/prisma.servise";
import { Prisma, User } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";
import { NotFoundError, combineLatest } from "rxjs";
import { readFile } from 'fs/promises';
const DEFAULT_PROFILE_PICTURE_DEFAULT_PATH ="/Users/aaitoual/Desktop/chat/back_end_project/src/picture/defaultProfilePicture.jpeg"

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

  async getUserConversationInbox(userId: number) {
    let inbox = await this.prisma.user.findUnique({
      where: {id: userId},
      select: {
        rooms: {
          select: {
            id: true,
            whoJoined: {
              where :{
                id: {
                  not: userId,
                }
              },
              select: {
                username: true,
                profilePicture: true,
                id: true,
              }
            },
            messages: {
              select: {
                createdAt: true,
                createdBy: {
                  select: {
                    username: true,
                    id: true,
                  }
                },
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
    })
    const check_inbox = await this.prisma.user.findUnique({
      where: {id: userId},
      select: {
        rooms: {
          select: {
            group: true,
            whoJoined: {
              select: {
                profilePicture: true,
              }
            }
          }
        }
      }
    })

    if (!check_inbox)
      throw new NotFoundException("No inbox found for this user");

    for (let i = 0; i < check_inbox.rooms.length; i++) {
    }
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
