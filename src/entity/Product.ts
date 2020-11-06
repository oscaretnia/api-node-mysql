import { Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['code'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  code: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  reference: string;

  @Column()
  @IsNotEmpty()
  locationStorage: string;

  @Column()
  @IsNotEmpty()
  image: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}
