import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';
import { dataSourceOption } from './config/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOption), ProductModule, OrderModule, UsersModule],
})
export class AppModule {}
