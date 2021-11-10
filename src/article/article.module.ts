import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { CategoryService } from 'src/category/category.service';
@Module({
  providers: [ArticleService, ArticleResolver, CategoryService],
})
export class ArticleModule { }