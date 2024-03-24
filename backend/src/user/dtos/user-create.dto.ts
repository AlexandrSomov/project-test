import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserCreateDto {
  @ApiProperty({ type: String, description: 'The first name of the user.', required: true })
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({ type: String, description: 'The last name of the user.', required: true })
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ type: String, description: 'The email address of the user.', required: true })
  @MaxLength(255)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ type: String, description: 'The password of the user.', required: true })
  @MinLength(8)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
