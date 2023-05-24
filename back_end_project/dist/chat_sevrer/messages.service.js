"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService {
    constructor() {
        this.messages = [{ name: 'tsuki', text: 'Hello, from tsuki' }];
        this.idToUser = {};
    }
    async create(createMessageDto, client) {
        const message = {
            name: this.idName(client.id),
            text: createMessageDto.text,
        };
        this.messages.push(message);
        return message;
    }
    findAll() {
        return this.messages;
    }
    idName(id) {
        return this.idToUser[id];
    }
    async joinRoom(name, client) {
        this.idToUser[client.id] = name;
        return Object.values(this.idToUser);
    }
    async isTyping(isTyping__, client) {
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)()
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map