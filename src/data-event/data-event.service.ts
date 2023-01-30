import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataEvent, CatDocument } from './data-event.entity';

@Injectable()
export class DataEventService {
  constructor(@InjectModel(DataEvent.name) private dataEventModel: Model<CatDocument>) {}
  
  
  async create(event: any): Promise<DataEvent> {
    const createDataEvent = new this.dataEventModel({
      eventId: Date.now().toString(),
      data: event,
    });
    return createDataEvent.save();
  }

  async findAll(): Promise<DataEvent[]> {
    return this.dataEventModel.find().exec();
  }
}
