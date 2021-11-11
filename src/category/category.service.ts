import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Category,
  CreateCategoryInput,
  CategoryDocument,
} from './category.schema';
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  async findAll() {
    return this.categoryModel.find().lean();
  }
  async findById(_id) {
    return this.categoryModel.findById(_id).lean();
  }

  async createCategory(input: CreateCategoryInput) {
    return this.categoryModel.create(input);
  }
}
