import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private readonly quizService: QuestionService) {}
  
    @Get()
    getAllQuestions() {
      return this.quizService.findAll();
    }
}
