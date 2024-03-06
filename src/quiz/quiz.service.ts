import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.model';

@Injectable()
export class QuizService {

    // mock data
    public quizzes: Quiz[] = [
        {
            id: 1,
            title: 'Test Quiz',
            description: 'Test first quiz',
            questions: [
              {
                id: 1,
                questionText: 'What is odd number?',
                options: ['1', '2', '4', '6'],
                correctOption: 0
              },
            ],
          },
    ]
    getAllQuizzes(): Quiz[] {
        return this.quizzes;
      }
}
