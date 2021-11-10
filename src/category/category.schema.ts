import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CategoryDocument = Category & mongoose.Document;
@Schema()
@ObjectType()
export class Category {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;
}
