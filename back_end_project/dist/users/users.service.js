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
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(info) {
        const newUser = await this.prisma.user.create({ data: info });
        return newUser;
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany({});
        return users;
    }
    async deleteAllUsers() {
        const users = await this.prisma.user.deleteMany();
    }
    async followTheUser(id, followedId) {
        const user = await this.prisma.user.update({ where: { id },
            data: { following: { connect: { id: followedId } } } });
        const followed = await this.prisma.user.update({
            where: { id: followedId },
            data: {
                followedBy: {
                    connect: { id }
                }
            }
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_servise_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map