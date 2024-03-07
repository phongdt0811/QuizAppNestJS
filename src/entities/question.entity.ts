// src/entities/question.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionText: string;

  @Column('json', { array: true }) 
  options: string[];

  @Column({ type: 'int', array: true, default: '[]' })
  correctOption: number[];

  @Column({ default: 1 }) // Type 1: Single correct answer, Type 2: Multiple correct answers
  type: number;

  @Column({ nullable: true }) // Allow null for hints
  hint: string;
}
