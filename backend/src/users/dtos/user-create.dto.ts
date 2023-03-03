import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength } from 'class-validator';

export class UserCreateDto {
  @ApiProperty()
  @MaxLength(255)
  readonly firstName: string;

  @ApiProperty()
  @MaxLength(255)
  readonly lastName: string;

  @ApiProperty()
  @MaxLength(255)
  @IsEmail()
  readonly email: string;
}
