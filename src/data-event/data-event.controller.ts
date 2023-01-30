import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataEventService } from './data-event.service';

@Controller('/data-events')
export class CatController {
  constructor(private readonly dataEventService: DataEventService) {}

  @Post('/create')
  createCat(@Body() event: any): any {
    console.log(event)
    return this.dataEventService.create(event);
  }

  @Get()
  getAllDataEvents() {
    return this.dataEventService.findAll()
  }
}
