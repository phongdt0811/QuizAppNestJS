import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.model';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
  
    @Get()
    getAllQuizzes() {
      return this.quizService.getAllQuizzes();
    }
}
