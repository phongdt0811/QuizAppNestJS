import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import QuizComponent from './components/QuizComponent/QuizComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS in React!</h1>
      <QuizComponent />
    </div>
  );
};

export default App;
