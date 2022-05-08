import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';;
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose'

import 'dotenv/config'
@Module({
  imports: [TaskModule, HealthCheckModule, MongooseModule.forRoot(process.env.MONGO_URL ?? 'mongodb://localhost/task')],

})
export class AppModule { }
