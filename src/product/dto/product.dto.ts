import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  year: string;

  @IsArray()
  @IsNotEmpty()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  showroom: string;
}
