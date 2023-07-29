import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Files } from '../files/files.entity';

@Entity()
export class User {
  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @ApiProperty({ type: String })
  @Column({ unique: true, type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ApiProperty({ type: () => Files })
  @OneToOne(() => Files, { cascade: true })
  @JoinColumn({ name: 'avatarId' })
  avatar: Files;
}
