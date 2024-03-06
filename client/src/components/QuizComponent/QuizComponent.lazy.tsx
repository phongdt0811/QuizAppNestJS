import React, { lazy, Suspense } from 'react';

const LazyQuizComponent = lazy(() => import('./QuizComponent'));

const QuizComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyQuizComponent {...props} />
  </Suspense>
);

export default QuizComponent;
