import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizComponent from './QuizComponent';

describe('<QuizComponent />', () => {
  test('it should mount', () => {
    render(<QuizComponent />);
    
    const quizComponent = screen.getByTestId('QuizComponent');

    expect(quizComponent).toBeInTheDocument();
  });
});