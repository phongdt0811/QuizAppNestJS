import { createConnection } from 'typeorm';
import { Question } from '../entities/question.entity';

const insertDemoQuestions = async () => {
  const connection = await createConnection();

  const questionRepository = connection.getRepository(Question);

  const questionsData = [
    { question: 'How can you accumulate and use membership points with vani?', 
      options: ['Hand over membership card', 'Tell your Phone number', 'Show Vani Barcode on the Home screen'], 
      correctOption: [2],
      hint: 'To earn/use membership points with vani benefits, scan the Vani Barcode'
    },
    { question: 'What is an additional reward when you earn membership points with vani?', 
      options: ['Vani Point', 'Vani Coin', 'Vani Money'], 
      correctOption: [1],
      hint: 'Earn/use membership points with vani. Open Ice Cream. Get Vani Coins'
    },
    { question: 'There is another way to get Vani Coin. What is it?', 
      options: ['Leave a 1:1 inquiry', 'Run the vani app every day', 'Play Shake'], 
      correctOption: [2],
      hint: 'You can get additional Vani Coins when you play Shake once a day'
    },
    { question: 'How can you accumulate and use membership points with vani?', 
      options: ['Hand over membership card', 'Tell your Phone number', 'Exchange to membership points'], 
      correctOption: [0, 2],
      hint: 'Your Vani Coins can be exchanged for other membership points or Vouchers'
    },
  ];

  const quizzes = questionRepository.create(questionsData);

  await questionRepository.save(quizzes);

  await connection.close();
};

insertDemoQuestions();
