import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import {
  Article,
  CreateArticleInput,
  FindArticlesWithPaginationInput,
} from './article.schema';
@Resolver(() => Article)
export class ArticleResolver {
  constructor(private articleService: ArticleService) {}

  @Query(() => [Article])
  async articles(
    @Args('input') { pageSize, pageNumber }: FindArticlesWithPaginationInput,
  ) {
    return this.articleService.findWithPagination(pageSize, pageNumber);
  }

  @Query(() => [Article])
  async articlesTitle() {
    return this.articleService.findAllTitles();
  }

  @Mutation(() => Article)
  async createArticle(@Args('input') article: CreateArticleInput) {
    return this.articleService.createArticle(article);
  }
}
