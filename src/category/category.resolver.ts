import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category, CreateCategoryInput } from './category.schema';
@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}
  @Query(() => [Category])
  async categories() {
    return this.categoryService.findAll();
  }
  @Mutation(() => Category)
  async createCategory(@Args('input') input: CreateCategoryInput) {
    return this.categoryService.createCategory(input);
  }
}
