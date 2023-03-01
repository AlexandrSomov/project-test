import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  screen: string;

  @Column({ type: 'varchar', length: 255 })
  capacity: string;

  @Column({ type: 'varchar', length: 255 })
  ram: string;
}
