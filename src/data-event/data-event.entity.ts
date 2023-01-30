import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type CatDocument = HydratedDocument<DataEvent>;

@Schema()
export class DataEvent {
  @Prop()
  eventId: string;

  @Prop({type: SchemaTypes.Mixed})
  data: any;
}

export const DataEventSchema = SchemaFactory.createForClass(DataEvent);
