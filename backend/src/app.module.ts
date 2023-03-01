import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ProductModule } from './products/product.module';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';
import { dataSourceOption } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      migrations: [path.resolve(__dirname, './migrations/*.js')],
      migrationsTableName: 'migrations',
      synchronize: false,
      migrationsRun: true,
      migrationsTransactionMode: 'each',
      ...dataSourceOption,
    }),
    ProductModule,
    OrderModule,
    UsersModule,
  ],
})
export class AppModule {}
