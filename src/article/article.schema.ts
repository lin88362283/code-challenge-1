import {
  Field,
  ObjectType,
  ID,
  InputType,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/category.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ArticleDocument = Article & mongoose.Document;

@Schema()
@ObjectType()
export class Article {
  // TODO:可能不需要
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
    required: true,
  })
  @Field(() => [Category])
  categories: Category[] | string[];

  @Prop({ required: true })
  @Field()
  authorCountry: string;

  @Prop({ required: true })
  @Field()
  authorName: string;

  @Prop({ required: true })
  @Field()
  content: string;

  @Prop({ type: mongoose.Schema.Types.Date, required: true })
  @Field(() => GraphQLISODateTime)
  createdAt: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

@InputType()
export class CreateArticleInput {
  @Field()
  title: string;

  @Field(() => [ID])
  categories: string[];

  @Field()
  authorCountry: string;

  @Field()
  authorName: string;

  @Field()
  content: string;

  @Field()
  createdAt: string;
}

@InputType()
export class FindArticlesWithPaginationInput {
  @Field()
  pageSize: number;

  @Field()
  pageNumber: number;
}
