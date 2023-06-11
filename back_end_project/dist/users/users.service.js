"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_servise_1 = require("../prisma/prisma.servise");
const DEFAULT_PROFILE_PICTURE_DEFAULT_PATH = "/Users/aaitoual/Desktop/chat/back_end_project/src/picture/defaultProfilePicture.jpeg";
let UsersService = exports.UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        const newUser = await this.prisma.user.create({ data });
        await this.prisma.inbox.create({
            data: {
                inboxOf: { connect: { id: newUser.id } },
            },
        });
        const newUserInfo = await this.prisma.user.findUnique({
            where: { id: newUser.id },
        });
        if (newUserInfo)
            return newUserInfo;
        return newUser;
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany();
        return users;
    }
    async getUser(where) {
        const user = await this.prisma.user.findUniqueOrThrow({ where });
        return user;
    }
    async updateUser(id, updateInfo) {
        const user = await this.prisma.user.update({
            where: id,
            data: updateInfo,
        });
        return user;
    }
    async getUserConversationInbox(userId) {
        let inbox = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                rooms: {
                    select: {
                        whoJoined: {
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
        });
        const check_inbox = await this.prisma.user.findUnique({
            where: { id: userId },
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
        });
        if (!check_inbox)
            throw new common_1.NotFoundException("No inbox found for this user");
        for (let i = 0; i < check_inbox.rooms.length; i++) {
        }
        return inbox;
    }
    async deleteUser(where) {
        const user = await this.prisma.user.delete({ where });
    }
    async deleteAll() {
        await this.prisma.message.deleteMany();
        await this.prisma.room.deleteMany();
        await this.prisma.inbox.deleteMany();
        await this.prisma.user.deleteMany();
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_servise_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map