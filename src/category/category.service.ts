import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: any) {
    try {
      const { raw } = await this.categoryRepository
        .createQueryBuilder()
        .insert()
        .into("category")
        .values(createCategoryDto)
        .returning(["*"])
        .execute();
      return raw[0];
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.categoryRepository.find();
  }
}
