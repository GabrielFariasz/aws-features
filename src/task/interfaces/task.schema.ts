import { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'


export type TaskDocument = Task & Document

@Schema()
export class Task {

  @Prop()
  name: string

  @Prop()
  description: string

  @Prop()
  expirationDate: Date

  @Prop()
  creationDate: Date = new Date()

  @Prop()
  owner: string

  @Prop()
  status: string

}

export const TaskSchema = SchemaFactory.createForClass(Task)

