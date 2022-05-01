import { Injectable } from '@nestjs/common';
import { AddTask } from './interfaces/task.interface';
import { Task, TaskDocument } from './interfaces/task.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private taskSchema: Model<TaskDocument>
  ) { }


  async createTask(data: AddTask): Promise<any> {
    const mongoData = new this.taskSchema({
      ...data,
      creationDate: new Date(),
      status: 'to-do'

    })
    return await mongoData.save()
  }

  async getTaskById(idParam: string): Promise<any> {
    const mongoData = this.taskSchema.findById(idParam)
    return mongoData
  }

  async getTasks(): Promise<any> {
    const mongoData = this.taskSchema.find()
    return mongoData
  }

}