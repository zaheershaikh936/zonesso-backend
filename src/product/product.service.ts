import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm/repository/Repository";
import { CreateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { raw } = await this.productRepository
        .createQueryBuilder()
        .insert()
        .into("product")
        .values(createProductDto)
        .returning(["*"])
        .execute();
      return raw[0];
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.productRepository.find({ relations: ["showroom"] });
  }

  findById(id: string) {
    return this.productRepository.findOne({
      where: { id },
      relations: { showroom: true },
    });
  }
}
