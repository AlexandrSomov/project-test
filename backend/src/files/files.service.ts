import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Files } from './files.entity';

@Injectable()
export class FilesService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Files) private filesRepository: Repository<Files>,
  ) {}

  private containerName: string;

  private async getBlobServiceInstance() {
    const connectionString = this.configService.get('CONNECTION_STRING');
    return BlobServiceClient.fromConnectionString(connectionString);
  }

  private async getBlobClient(imageName: string): Promise<BlockBlobClient> {
    const blobService = await this.getBlobServiceInstance();
    const containerClient = blobService.getContainerClient('fileupload');
    return containerClient.getBlockBlobClient(imageName);
  }

  public async uploadFile(file: Express.Multer.File) {
    const extension = file.originalname.split('.').pop();
    const blockBlobClient = await this.getBlobClient(`${uuidv4()}.${extension}`);
    const fileUrl = blockBlobClient.url;
    await blockBlobClient.uploadData(file.buffer);
    return this.filesRepository.save({ imageUrl: fileUrl });
  }
}
