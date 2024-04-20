import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { genSalt, hash } from "bcrypt";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const salt = await genSalt(10);
      createUserDto.password = await hash(createUserDto.password, salt);
      const { raw } = await this.userRepository
        .createQueryBuilder()
        .insert()
        .into("user")
        .values(createUserDto)
        .returning(["*"])
        .execute();
      return raw[0];
    } catch (error) {
      return error;
    }
  }

  async isExistEmail(email: string) {
    return await this.userRepository.findOneBy({ email: email });
  }
}
