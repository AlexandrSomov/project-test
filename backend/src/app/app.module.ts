import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '../products/product.module';
import { OrderModule } from '../order/order.module';
import { UserModule } from '../user/user.module';
import { dataSourceOptions } from '../config/data-source';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductModule,
    OrderModule,
    UserModule,
    FilesModule,
  ],
  providers: [],
})
export class AppModule {}
