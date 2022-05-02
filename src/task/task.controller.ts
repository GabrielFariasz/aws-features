import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AddTask, GetTaskParams } from './interfaces/task.interface';
import { Task } from './interfaces/task.schema';
import { TaskService } from './task.service';
import { Response } from 'express'


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
    try {
      return await this.taskService.getTaskById(params.id)
    } catch (err) {
      return { error: 'Data not found' }
    }
  }

  @Get()
  @HttpCode(200)
  async getTasks() {
    return await this.taskService.getTasks()
  }

  @Put('/:id')
  async updateTaskById(@Param() params: GetTaskParams<string>, @Body() body: Task, @Res() resp: Response) {
    try {
      return await this.taskService.updateTaskById(params.id, body)
    } catch (err) {
      return resp.status(HttpStatus.BAD_REQUEST).json({
        error: 'Data not found'
      })
    }
  }
}

