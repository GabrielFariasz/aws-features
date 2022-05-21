import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';;
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose'
import env from './configs/env'

@Module({
  imports: [TaskModule, HealthCheckModule, MongooseModule.forRoot(env.MONGO_URL)],

})
export class AppModule { }
