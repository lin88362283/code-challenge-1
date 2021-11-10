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

  // @Prop({ required: true })
  @Field()
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  })
  @Field(() => [Category])
  categories: Category[] | string[];

  @Field()
  authorCountry: string;

  @Field()
  authorName: string;

  @Field()
  content: string;

  // TODO
  @Prop({ type: mongoose.Schema.Types.Date, default: Date.now })
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
}

@InputType()
export class FindArticlesWithPaginationInput {
  @Field()
  pageSize: number;

  @Field()
  pageNumber: number;
}
