import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { CategoryService } from 'src/category/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './article.schema';
import { Category, CategorySchema } from 'src/category/category.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [ArticleService, ArticleResolver, CategoryService],
})
export class ArticleModule {}
