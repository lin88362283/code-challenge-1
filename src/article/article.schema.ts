import { Field, ObjectType, ID, InputType, Int } from '@nestjs/graphql';
import { Category } from 'src/category/category.schema';

@ObjectType()
export class Article {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [Category])
  categories: Category[];

  @Field()
  authorCountry: string;

  @Field()
  authorName: string;

  @Field()
  content: string;

  // TODO
  @Field()
  createdAt: string;
}

@InputType()
export class CreateArticleInput {
  @Field(() => ID)
  id: string;

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
