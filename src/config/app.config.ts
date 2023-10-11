import { Module } from '@nestjs/common';
import { MongoConnection } from './database.config';
import { EnvironmentConfig } from './enviroment.config';

@Module({
  imports: [EnvironmentConfig, MongoConnection],
})
export class AppConfig {}
