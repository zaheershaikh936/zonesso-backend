import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Showroom } from "src/entities/showroom.entity";
import { Repository } from "typeorm";
@Injectable()
export class ShowroomService {
  constructor(
    @InjectRepository(Showroom)
    private showroomRepository: Repository<Showroom>,
  ) {}

  async create(createShowroomDto: any) {
    try {
      const { raw } = await this.showroomRepository
        .createQueryBuilder()
        .insert()
        .into("showroom")
        .values(createShowroomDto)
        .returning(["*"])
        .execute();
      return raw[0];
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.showroomRepository.find();
  }
}
