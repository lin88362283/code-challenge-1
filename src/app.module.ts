import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/CC'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ArticleModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
