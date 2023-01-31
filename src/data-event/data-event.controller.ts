import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DataEventService } from './data-event.service';

@Controller('/data-events')
export class CatController {
  constructor(private readonly dataEventService: DataEventService) {}

  @Post('/createV2')
  createCat(@Body() event: any, @Req() req: Request): any {
    console.log(event)

    let body = ''
    req.on('data', (data) => {
      body += data
    })

    req.on('end', async () => {
      console.log(`POST request, \nPath: ${req.url}`)
      console.log('Headers: ')
      console.dir(req.headers)
      console.log(`Body: ${body}`)
      await this.dataEventService.create(JSON.parse(body));

    })

    return this.dataEventService.create(event);
  }

  @Get()
  getAllDataEvents() {
    return this.dataEventService.findAll()
  }
}
