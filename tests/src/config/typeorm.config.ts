import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "../tasks/typeorm/entities/task.entity";
import { User } from "../users/typeorm/entities/user.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'tsuki',
    password: 'pass1234',
    database: 'first_db',
    entities: [Task, User],
    synchronize: true,
}