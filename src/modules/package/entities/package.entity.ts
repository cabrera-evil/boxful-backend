import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PackageDocument = Package & Document;

@Schema({ timestamps: true })
export class Package {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  weightInPounds: number;

  @Prop({ required: true })
  quantity: number;
}

export const PackageSchema = SchemaFactory.createForClass(Package);
