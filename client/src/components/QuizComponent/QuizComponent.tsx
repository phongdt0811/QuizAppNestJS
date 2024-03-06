import React, { FC } from 'react';

interface QuizComponentProps {}

const QuizComponent: FC<QuizComponentProps> = () => (
//  <QuizComponentWrapper data-testid="QuizComponent">
//     QuizComponent Component
//  </QuizComponentWrapper>
      <div className="bg-green-500 text-white p-4">
         This is the QuizComponent with Tailwind CSS!
      </div>
);

export default QuizComponent;
