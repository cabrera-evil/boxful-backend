import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './config/app.config';
import { PackageModule } from './modules/package/package.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [AppConfig, PackageModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
