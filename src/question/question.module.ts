// src/questions/question.module.ts
import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { questionProviders } from './question.providers';
import { DatabaseModule } from 'src/database';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...questionProviders,
    QuestionService],
  controllers: [QuestionController],
  exports: [QuestionService]
})
export class QuestionModule {}
