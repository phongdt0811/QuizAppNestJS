import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import TypeOrModule from 'typeorm'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

}
