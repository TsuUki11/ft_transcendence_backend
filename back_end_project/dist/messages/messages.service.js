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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_servise_1 = require("../prisma/prisma.servise");
let MessagesService = exports.MessagesService = class MessagesService {
    constructor(prisma) {
        this.prisma = prisma;
        this.idToUser = {};
    }
    async createMessage(messageInfo) {
        let { messageContent, userId, roomId } = messageInfo;
        roomId = Number(roomId);
        userId = Number(userId);
        const newMessage = await this.prisma.message.create({
            data: {
                content: messageContent,
                createdBy: {
                    connect: {
                        id: userId,
                    }
                },
                room: {
                    connect: {
                        id: roomId,
                    },
                }
            },
        });
    }
    async getMessagesInTheRoom(roomId, take) {
        const messages = this.prisma.message.findFirst({
            where: {
                roomId,
            },
            select: {
                content: true,
                createdAt: true,
                createdBy: {
                    select: {
                        username: true,
                    }
                }
            }
        });
        return messages;
    }
};
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_servise_1.PrismaService])
], MessagesService);
//# sourceMappingURL=messages.service.js.map