import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Article,
  CreateArticleInput,
  ArticleDocument,
  FindArticlesWithPaginationInput,
} from './article.schema';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}
  async findAllTitles() {
    return this.articleModel.find({}, 'title').lean();
  }
  async findWithPagination({
    pageSize,
    pageNumber,
  }: FindArticlesWithPaginationInput) {
    return this.articleModel
      .find()
      .sort({ createdAt: 'desc' })
      .limit(pageSize)
      .skip(pageNumber * pageSize)
      .lean();
  }
  async createArticle(article: CreateArticleInput) {
    return this.articleModel.create(article);
  }
}
