import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Task } from "../../../tasks/typeorm/entities/task.entity";

@Entity( {name: 'users'} )
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string
    
    @Column()
    last_name: string
    
    @Column()
    @Unique('Dublicate username', ['username'])
    username: string

    @Column()
    password: string
    @OneToOne(() => Task)
    @JoinColumn()
    task: Task
}