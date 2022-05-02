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
      status: 'To-do'

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

  async updateTaskById(idParam: string, bodyData: Task): Promise<any> {
    const { name, description, creationDate, expirationDate, status } = bodyData
    const mongoData = this.taskSchema.updateOne({ _id: idParam }, {
      $set: {
        name,
        description,
        creationDate,
        expirationDate,
        status
      }
    })
    return mongoData
  }

}
