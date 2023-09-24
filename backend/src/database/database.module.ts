import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'postgres',
      host: 'localhost',
      port: 5426,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      migrations: ['dist/config/migrations/*.js'],
    }),
  ],
})
export class DatabaseModule {}
