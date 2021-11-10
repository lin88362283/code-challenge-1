import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArticleService } from './article.service';

import {
  Article,
  CreateArticleInput,
  FindArticlesWithPaginationInput,
} from './article.schema';
import { Category } from 'src/category/category.schema';
import { CategoryService } from 'src/category/category.service';
@Resolver(() => Article)
export class ArticleResolver {
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
  ) {}

  @Query(() => [Article])
  async articles(
    @Args('input') { pageSize, pageNumber }: FindArticlesWithPaginationInput,
  ) {
    return this.articleService.findWithPagination({ pageSize, pageNumber });
  }

  @Query(() => [Article])
  async articlesTitle() {
    return this.articleService.findAllTitles();
  }

  @Mutation(() => Article)
  async createArticle(@Args('input') article: CreateArticleInput) {
    return this.articleService.createArticle(article);
  }

  @ResolveField(() => Category)
  async categories(@Parent() article: Article) {
    return article.categories.map(async (category) =>
      this.categoryService.findById(category._id),
    );
  }
}
