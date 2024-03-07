export interface IQuiz {
    id: number;
    title: string;
    description: string;
    questions: IQuestion[];
  }
  
  export interface IQuestion {
    id: number;
    questionText: string;
    options: string[];
    type: number | 1;
    correctOption: number[];
    hint?: string
  }
  