import { Injectable } from '@nestjs/common';
import { Category, CreateCategory } from './category.schema'
@Injectable()
export class CategoryService {
  categories: Partial<Category>[];
  constructor() {
    // 从数据库拿的
    this.categories = categoriesData;
  }
  async findAll() {
    return this.categories;
  }
  async createCategory(category: CreateCategory) {
    this.categories = [...this.categories, category];
    return category;
  }
}