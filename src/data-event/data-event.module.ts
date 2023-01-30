import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataEventService } from './data-event.service';
import { CatController } from './data-event.controller';
import { DataEvent, DataEventSchema } from './data-event.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: DataEvent.name, schema: DataEventSchema }])],
  controllers: [CatController],
  providers: [DataEventService],
})
export class DataEventModule {}
