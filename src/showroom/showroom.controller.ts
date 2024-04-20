import { Body, Controller, Get, Post } from "@nestjs/common";
import { ShowroomService } from "./showroom.service";

@Controller("showroom")
export class ShowroomController {
  constructor(private readonly showroomService: ShowroomService) {}

  @Post()
  create(@Body() createShowroomDto: any) {
    return this.showroomService.create(createShowroomDto);
  }

  @Get()
  findAll() {
    return this.showroomService.findAll();
  }
}
