import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

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

  @ApiProperty()
  @MinLength(8)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
  readonly password: string;
}
