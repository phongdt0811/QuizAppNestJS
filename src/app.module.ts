import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
@Module({
  imports: [ConfigModule.forRoot(), QuestionModule],
  controllers: [AppController, QuizController, QuestionController],
  providers: [AppService, QuizService],
})
export class AppModule {}
