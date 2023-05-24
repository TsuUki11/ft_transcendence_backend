"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TasksStatusValidationPipe {
    constructor() {
        this.AllowedStatus = [
            task_status_enum_1.TaskStatus.DONE,
            task_status_enum_1.TaskStatus.IN_PROGRESS,
            task_status_enum_1.TaskStatus.OPEN
        ];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.IsAllowed(value))
            throw new common_1.BadRequestException();
        return value;
    }
    IsAllowed(value) {
        return this.AllowedStatus.indexOf(value) !== -1 ? true : false;
    }
}
exports.TasksStatusValidationPipe = TasksStatusValidationPipe;
//# sourceMappingURL=tasks-status-validation-pipe.js.map