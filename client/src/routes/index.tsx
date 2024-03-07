import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { PATH } from 'src/constants/paths';

import QuizIntroductionPage from '../pages/QuizIntroductionPage';
import SignInPage from 'src/pages/SignInPage';
import SignUpPage from 'src/pages/SignUpPage';
import QuizPage from 'src/pages/QuizPage';

import { getIsAuthenticated } from 'src/components/Auth/Auth.selector';

const MainRoutes = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Redirect to={PATH.INTRO}></Redirect>
        </Route>
        <Route path={PATH.INTRO} component={QuizIntroductionPage} />

        <Route path={PATH.SIGNIN}>
            { isAuthenticated ? <Redirect to={PATH.QUIZ} /> : <SignInPage /> }
        </Route>

        <Route path={PATH.SIGNUP} component={SignUpPage} />

        <Route path={PATH.QUIZ} component={QuizPage} >
            { isAuthenticated ? <QuizPage /> : <Redirect to={PATH.SIGNIN} /> }
        </Route>
        <Route render={() => <Redirect to={PATH.INTRO} />}/>
      </Switch>
    </Router>
  );
};

export default MainRoutes;
