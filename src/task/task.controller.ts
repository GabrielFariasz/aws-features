import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddTask, GetTaskParams } from './interfaces/task.interface';
import { TaskService } from './task.service';


@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
    //
  }

  @Post('/')
  async createTask(@Body() body: AddTask) {
    return await this.taskService.createTask(body)
  }

  @Get('/:id')
  async getTaskById(@Param() params: GetTaskParams<string>) {
    return await this.taskService.getTaskById(params.id)
  }


  @Get()
  async getTasks() {
    return await this.taskService.getTasks()
  }
}

