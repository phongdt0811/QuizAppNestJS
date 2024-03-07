import React from 'react';
import './App.css';
import './index.css';
import MainRoutes from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <h1 className="text-4xl font-bold">Hello, Tailwind CSS in React!</h1> */}
      < MainRoutes/>
    </div>
  );
};

export default App;
