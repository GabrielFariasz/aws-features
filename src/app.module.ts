import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';;
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [TaskModule, HealthCheckModule, MongooseModule.forRoot('mongodb://localhost/task')],

})
export class AppModule { }
