import React, { FC } from 'react';

interface QuizComponentProps {}

const QuizComponent: FC<QuizComponentProps> = () => (
//  <QuizComponentWrapper data-testid="QuizComponent">
//     QuizComponent Component
//  </QuizComponentWrapper>
      <div className="bg-green-500 text-white p-4">
         This is main the QuizComponent
      </div>
);

export default QuizComponent;
