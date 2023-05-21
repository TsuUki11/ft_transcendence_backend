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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./typeorm/entities/task.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/typeorm/entities/user.entity");
let TasksService = class TasksService {
    constructor(taskRepository, userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    async getAllTasks() {
        return await this.taskRepository.find();
    }
    createTask(task_info) {
        const newTask = this.taskRepository.create(Object.assign({}, task_info));
        return this.taskRepository.save(newTask);
    }
    async deleteTaskById(id) {
        await this.taskRepository.delete({ id });
        return this.getAllTasks();
    }
    async updateStatus(id, updateTask) {
        return await this.taskRepository.update({ id }, { status: updateTask });
    }
    async addTaskForUser(uId, tId) {
        const user = await this.userRepository.findOneBy({ id: uId });
        if (!user)
            throw new common_1.NotFoundException(`No user found by the id: ${uId} !!`);
        const task = await this.taskRepository.findOneBy({ id: tId });
        if (!task)
            throw new common_1.NotFoundException(`No task found by the id: ${tId} !!`);
        user.task = task;
        this.userRepository.save(user);
        return user;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map