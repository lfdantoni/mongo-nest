import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/cats')
export class CatController {
  constructor(private readonly appService: CatService) {}

  @Post('/create')
  createCat(@Body() cat: any): any {
    return this.appService.create(cat);
  }

  @Get()
  getAllCats() {
    return this.appService.findAll()
  }
}
