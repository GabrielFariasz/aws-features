import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller'
import { TaskSchema, Task } from './interfaces/task.schema';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])
  ]
})

export class TaskModule { }
