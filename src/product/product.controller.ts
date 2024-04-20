import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get("/:id")
  findById(@Param("id") id: string) {
    return this.productService.findById(id);
  }
}
