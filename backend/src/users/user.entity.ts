import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @ApiProperty()
  @Column({ unique: true, type: 'varchar', length: 255 })
  email: string;
}
