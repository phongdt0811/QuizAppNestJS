import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuizIntroductionPage from '../pages/QuizIntroductionPage';
import SignInPage from 'src/pages/SignInPage';
import SignUpPage from 'src/pages/SignUpPage';
import QuizPage from 'src/pages/QuizPage';

import { PATH } from 'src/constants/paths';
import {  } from 'react-router-dom';


const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Redirect to={PATH.INTRO}></Redirect>
        </Route>
        <Route path={PATH.INTRO} component={QuizIntroductionPage} />

        <Route path={PATH.SIGNIN} component={SignInPage} />

        <Route path={PATH.SIGNUP} component={SignUpPage} />

        <Route path="/quiz" component={QuizPage} />
        <Route>
            <Redirect to={PATH.INTRO}></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRoutes;
