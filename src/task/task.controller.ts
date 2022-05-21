import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AddTask, GetTaskParams } from './interfaces/task.interface';
import { Task } from './interfaces/task.schema';
import { TaskService } from './task.service';
import { Response } from 'express'


@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
    //
  }


  @Get()
  @HttpCode(200)
  async getTasks() {
    return await this.taskService.getTasks()
  }

  @Get('/:id')
  async getTaskById(@Param() params: GetTaskParams<string>) {
    try {
      return await this.taskService.getTaskById(params.id)
    } catch (err: any) {
      return { error: 'Data not found' }
    }
  }

  @Post('/')
  async createTask(@Body() body: AddTask) {
    return await this.taskService.createTask(body)
  }

  @Put('/:id')
  async updateTaskById(@Param() params: GetTaskParams<string>, @Body() body: Task, @Res() resp: Response) {
    try {
      return await this.taskService.updateTaskById(params.id, body)
    } catch (err: any) {
      return resp.status(HttpStatus.BAD_REQUEST).json({
        error: 'Data not found'
      })
    }
  }

  @Delete('/:id')
  async deleteTaskById(@Param() params: GetTaskParams<string>, @Res() resp: Response) {
    try {
      const deletedTask = await this.taskService.deleteTaskById(params.id)
      if (deletedTask.acknowledged) return resp.status(200).json({
        message: `Task ${params.id} deleted`
      })
      throw Error('Task not deleted')
    } catch (err: any) {
      return resp.status(HttpStatus.BAD_REQUEST).json({
        error: err.message || 'Data not found'
      })
    }
  }


}

