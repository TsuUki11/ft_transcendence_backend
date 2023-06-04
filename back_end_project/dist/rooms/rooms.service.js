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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_servise_1 = require("../prisma/prisma.servise");
let RoomsService = exports.RoomsService = class RoomsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRoom(id, otherId, roomName) {
        const newRoom = await this.prisma.room.create({
            data: {
                room_name: roomName,
                whoJoined: {
                    connect: { id: id }
                },
            }
        });
        this.addRoomToInbox(newRoom.id, id);
        if (otherId)
            this.addUserToTheRoom(newRoom.id, otherId);
    }
    async joinRoom(roomId, userId) {
        this.addUserToTheRoom(roomId, userId);
        this.addRoomToInbox(roomId, userId);
    }
    async addRoomToInbox(roomId, userId) {
        await this.prisma.inbox.update({
            where: {
                userId: userId
            },
            data: {
                rooms: {
                    connect: {
                        id: roomId
                    }
                }
            }
        });
    }
    async addUserToTheRoom(roomId, userId) {
        await this.prisma.room.update({
            where: { id: roomId },
            data: {
                whoJoined: {
                    connect: {
                        id: userId,
                    }
                }
            }
        });
        this.addRoomToInbox(roomId, userId);
    }
};
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_servise_1.PrismaService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map