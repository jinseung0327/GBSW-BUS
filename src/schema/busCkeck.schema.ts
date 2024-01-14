import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BusCheck {
  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  busRode: boolean;
}

export type BusCheckDocument = BusCheck & Document;
export const BusCheckSchema = SchemaFactory.createForClass(BusCheck);
