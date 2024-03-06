export interface Quiz {
    id: number;
    title: string;
    description: string;
    questions: Question[];
  }
  
  export interface Question {
    id: number;
    questionText: string;
    options: string[];
    correctOption: number;
  }
  