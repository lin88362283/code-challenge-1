import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ArticleModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [ArticleService, CategoryService],
})
export class AppModule {}
