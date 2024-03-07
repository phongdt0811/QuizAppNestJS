// src/migrations/YYYYMMDDHHMMSS-AddDefaultQuestions.ts
import { MigrationInterface, QueryRunner } from 'typeorm';
import { Question } from 'src/entities/question.entity';

export class InsertDemoQuestion1709807347280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const questionsData = [
        { question: 'How can you accumulate and use membership points with vani?', 
          options: ['Hand over membership card', 'Tell your Phone number', 'Show Vani Barcode on the Home screen'], 
          correctOption: [2],
          type: 1,
          hint: 'To earn/use membership points with vani benefits, scan the Vani Barcode'
        },
        { question: 'What is an additional reward when you earn membership points with vani?', 
          options: ['Vani Point', 'Vani Coin', 'Vani Money'], 
          correctOption: [1],
          type: 1,
          hint: 'Earn/use membership points with vani. Open Ice Cream. Get Vani Coins'
        },
        { question: 'There is another way to get Vani Coin. What is it?', 
          options: ['Leave a 1:1 inquiry', 'Run the vani app every day', 'Play Shake'], 
          correctOption: [2],
          type: 1,
          hint: 'You can get additional Vani Coins when you play Shake once a day'
        },
        { question: 'How can you accumulate and use membership points with vani?', 
          options: ['Hand over membership card', 'Tell your Phone number', 'Exchange to membership points'], 
          correctOption: [0, 2],
          type: 2,
          hint: 'Your Vani Coins can be exchanged for other membership points or Vouchers'
        },
      ];

    const questionRepository = queryRunner.manager.getRepository(Question);

    await Promise.all(
      questionsData.map(async (data) => {
        const question = new Question();
        question.questionText = data.question;
        question.options = data.options;
        question.correctOption = data.correctOption
        question.type = data.type;
        question.hint = data.hint;
        console.log(data.correctOption.map(Number));
        console.log(question);
        await questionRepository.save(question);
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Add rollback logic if needed
  }
}
