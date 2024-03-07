import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
// import { UserModule } from './user/user.module';
// import { UserService } from './user/user.service';

@Module({
  imports: [ConfigModule.forRoot(), QuestionModule, AuthModule],
  controllers: [AppController, QuestionController, AuthController],
  providers: [AppService],
})
export class AppModule {}
