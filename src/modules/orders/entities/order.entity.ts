import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Package } from 'src/modules/package/entities/package.entity';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  pickupAddress: string;

  @Prop({ required: true })
  scheduledDate: Date;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  deliveryAddress: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  municipality: string;

  @Prop({ required: true })
  referencePoint: string;

  @Prop({ required: true })
  specialInstructions: string;

  @Prop({ required: true })
  items: Package[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
