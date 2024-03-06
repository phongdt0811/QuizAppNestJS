import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [],
  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
