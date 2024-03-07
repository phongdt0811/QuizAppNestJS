import { Injectable } from '@nestjs/common';
import { IQuestion, IQuiz } from './quiz.model';

@Injectable()
export class QuizService {

    // mock data
    public quizzes: IQuiz[] = [
        {
            id: 1,
            title: 'Test Quiz',
            description: 'Test first quiz',
            questions: [
              {
                id: 1,
                questionText: 'What is odd number?',
                options: ['1', '2', '4', '6'],
                type: 1,
                correctOption: [0]
              },
            ],
          },
    ]
    getAllQuizzes(): IQuiz[] {
        return this.quizzes;
      }
}
