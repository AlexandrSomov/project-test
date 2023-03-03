import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './user.entity';
import { UserCreateDto } from './dtos/user-create.dto';
import { File } from '../files/files.entity';
import { FilesService } from '../files/files.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly fileService: FilesService,
  ) {}

  async create(createUser: UserCreateDto): Promise<User> {
    const user = this.userRepository.create(createUser);

    return this.userRepository.save(user);
  }

  async findOne(userFindOptions: FindOptionsWhere<User>) {
    return this.userRepository.findOneBy(userFindOptions);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: number, updateDto?: File) {
    const user = await this.userRepository.findOne({
      relations: ['avatar'],
      where: {
        id,
      },
    });

    if (updateDto) {
      user.avatar = updateDto;
    }

    return this.userRepository.update(id, user);
  }

  async updateAvatar(avatar: Express.Multer.File) {
    const upload = await this.fileService.uploadFile(avatar);
    const user = new User();

    user.avatar = upload;
    await this.update(user.id, upload);
    return { upload, message: 'uploaded successfully' };
  }
}
