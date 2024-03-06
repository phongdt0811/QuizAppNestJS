import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { PATH } from 'src/constants/paths';

const QuizIntroductionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold underline mb-4">Welcome to the Quiz</h1>
        <p className="text-center">
        Take quiz of XXX coin to get instantly 1,000 coins 
        </p>
      </div>
      <div className="mb-8">
        <img src="/path/to/your/image.jpg" alt="Quiz Image" className="max-w-full h-auto" />
      </div>
      <div>
        <Link to={PATH.QUIZ} className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizIntroductionPage;