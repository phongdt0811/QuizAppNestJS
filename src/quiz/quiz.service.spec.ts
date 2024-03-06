import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all quizzes', () => {
    const quizzes = service.getAllQuizzes();
    expect(quizzes).toHaveLength(1);
  });
});
