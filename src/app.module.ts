import { Module } from '@nestjs/common';
import { AppConfig } from './config/app.config';
import { PackageModule } from './modules/package/package.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    AppConfig,
    PackageModule,
    OrdersModule,
  ],
})
export class AppModule {}
