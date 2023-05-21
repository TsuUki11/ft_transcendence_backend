"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const task_entity_1 = require("../tasks/typeorm/entities/task.entity");
const user_entity_1 = require("../users/typeorm/entities/user.entity");
exports.typeOrmConfig = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'tsuki',
    password: 'pass1234',
    database: 'first_db',
    entities: [task_entity_1.Task, user_entity_1.User],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map