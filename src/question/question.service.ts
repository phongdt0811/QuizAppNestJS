// src/questions/question.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { REPOSITORIES  } from 'src/constants';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {

  constructor(
    @Inject(REPOSITORIES.QUESTION)
    private readonly questionRepository: Repository<Question>
    ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }
}
