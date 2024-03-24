import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from '../products/product.module';
import { OrderModule } from '../order/order.module';
import { UserModule } from '../user/user.module';
import { FilesModule } from '../files/files.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ProductModule,
    OrderModule,
    UserModule,
    FilesModule,
  ],
  providers: [],
})
export class AppModule {}
