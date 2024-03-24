import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserUpdateDto {
  @ApiProperty({ type: String, description: 'The first name of the user.' })
  @MaxLength(255)
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({ type: String, description: 'The last name of the user.' })
  @MaxLength(255)
  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @ApiProperty({ type: String, description: 'The email address of the user.' })
  @MaxLength(255)
  @IsEmail()
  @IsString()
  @IsOptional()
  readonly email?: string;

  @ApiProperty({ type: String, description: 'The password of the user.' })
  @MinLength(8)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
  @IsString()
  @IsOptional()
  readonly password?: string;
}
