import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentConfig } from './enviroment.config';

@Module({
  imports: [EnvironmentConfig, MongooseModule.forRoot(process.env.MONGO_URI)],
})
export class MongoConnection {}
