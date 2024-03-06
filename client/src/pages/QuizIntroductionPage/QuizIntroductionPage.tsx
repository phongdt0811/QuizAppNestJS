import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { PATH } from 'src/constants/paths';

const QuizIntroductionPage: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Welcome to the Quiz</h1>
      <Link to={PATH.SIGNIN}>Start Quiz</Link>
    </div>
  );
};

export default QuizIntroductionPage;