import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@InputType()
export class CreateCategoryInput {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  // @Field(() => [Int])
  // categories: number[];
  @Field(() => [ID])
  categories: string[];

  @Field()
  authorCountry: string;

  @Field()
  authorName: string;

  @Field()
  content: string;
}