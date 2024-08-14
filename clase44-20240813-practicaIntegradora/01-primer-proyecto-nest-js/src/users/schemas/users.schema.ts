
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>;

@Schema({timestamps:true, strict:false})
export class Users {
  @Prop({type: String})
  name: string;

  @Prop({
    type: String, unique:true
  })
  email: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users);