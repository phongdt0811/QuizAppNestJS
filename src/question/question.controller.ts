import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guards';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private readonly quizService: QuestionService) {}

    @UseGuards(JwtGuard)
    @Get()
    getAllQuestions() {
      return this.quizService.findAll();
    }
}
