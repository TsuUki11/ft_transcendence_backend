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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const createMessageDto_1 = require("../dto/message/createMessageDto");
let MessagesController = exports.MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    createMessage(messageInfo) {
        return this.messagesService.createMessage(messageInfo);
    }
    getMessagesInTheRoom(roomId, take) {
        return this.messagesService.getMessagesInTheRoom(roomId, take);
    }
};
__decorate([
    (0, common_1.Post)('/createMessage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMessageDto_1.createMessageDto]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Post)('/getMessagesInTheRoom/:roomId'),
    __param(0, (0, common_1.Param)('roomId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "getMessagesInTheRoom", null);
exports.MessagesController = MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
//# sourceMappingURL=messages.controller.js.map