import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { runInThisContext } from 'vm';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task-dto';
import { TasksStatusValidationPipe } from './pipes/tasks-status-validation-pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TaskStatus } from './task-status.enum';
import { updateTaskDto } from './dto/update-task-dto';
import { Prisma } from '@prisma/client';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServices : TasksService) {}
    
    // @Get('/:id')
    // getTaskById(@Param('id', ParseIntPipe) id: number) : Promise<Task> {
    //     return this.tasksServices.getTaskById(id);
    // }
    @Post()
    createTask (@Body() info: Prisma.TaskCreateInput) {
        return this.tasksServices.createTask(info);
    }
    @Get()
    getTasks (@Query()filterDto: GetTasksFilterDto) {
        // if (Object.keys(filterDto).length)
        //     return this.tasksServices.getTasksWithFilter(filterDto);
        // else
            return this.tasksServices.getAllTasks();
    }
    // @Patch('/:id/status')
    // updateStatus(@Param('id', ParseIntPipe) id: number, @Body('status', TasksStatusValidationPipe) status: TaskStatus) {
    //     return this.tasksServices.updateStatus(id, status);
    // }
    // @Get()
    // getTasks (@Query()filterDto: GetTasksFilterDto): Task[] {
    //     if (Object.keys(filterDto).length)
    //         return this.tasksServices.getTasksWithFilter(filterDto);
    //     else
    //         return this.tasksServices.getAllTasks();
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask (@Body() createTaskDto: CreateTaskDto): Task {
    //     return this.tasksServices.createTask(createTaskDto);
    // }

    @Patch('/addTaskToUser')
    addTaskToUser(@Body('uId') uId: Prisma.UserWhereUniqueInput, @Body('tId') tId: Prisma.TaskWhereUniqueInput) {
        return this.tasksServices.addTaskForUser(uId, tId);
    }
    

    // @Delete('/:id')
    // deleteTaskById (@Param('id', ParseIntPipe) id: number) {
    //     return this.tasksServices.deleteTaskById(id);
    // }

}
