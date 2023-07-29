import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './files.service';
import { Files } from './files.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Files])],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
