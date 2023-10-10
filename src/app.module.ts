import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './config/app.config';

@Module({
  imports: [AppConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
