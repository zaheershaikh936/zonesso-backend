import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Showroom } from "src/entities/showroom.entity";
import { ShowroomController } from "./showroom.controller";
import { ShowroomService } from "./showroom.service";

@Module({
  imports: [TypeOrmModule.forFeature([Showroom])],
  controllers: [ShowroomController],
  providers: [ShowroomService],
})
export class ShowroomModule {}
