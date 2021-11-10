import { Injectable } from '@nestjs/common';
import { Article, CreateArticleInput } from './article.schema';
@Injectable()
export class ArticleService {
  // TODO: partial
  articles: Partial<Article>[];
  constructor() {
    // 从数据库拿的
    this.articles = articles;
  }
  async findAllTitles() {
    return this.articles.map((article) => article.title);
  }
  async findWithPagination(pageSize: number, pageNumber: number) {

  }
  async createArticle(article: CreateArticleInput) {
    this.articles = [article, ...this.articles];
    return article;
  }
}