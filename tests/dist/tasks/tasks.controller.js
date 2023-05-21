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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task-dto");
const tasks_status_validation_pipe_1 = require("./pipes/tasks-status-validation-pipe");
const get_tasks_filter_dto_1 = require("./dto/get-tasks-filter-dto");
const task_status_enum_1 = require("./task-status.enum");
let TasksController = class TasksController {
    constructor(tasksServices) {
        this.tasksServices = tasksServices;
    }
    createTask(createTaskDto) {
        return this.tasksServices.createTask(createTaskDto);
    }
    getTasks(filterDto) {
        return this.tasksServices.getAllTasks();
    }
    updateStatus(id, status) {
        return this.tasksServices.updateStatus(id, status);
    }
    addTaskToUser(uId, tId) {
        return this.tasksServices.addTaskForUser(uId, tId);
    }
    deleteTaskById(id) {
        return this.tasksServices.deleteTaskById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tasks_filter_dto_1.GetTasksFilterDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Patch)('/:id/status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('status', tasks_status_validation_pipe_1.TasksStatusValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)('/addTaskToUser'),
    __param(0, (0, common_1.Body)('uId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('tId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "addTaskToUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTaskById", null);
TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map