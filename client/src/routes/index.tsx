import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuizIntroductionPage from '../pages/QuizIntroductionPage';

import { PATH } from 'src/constants/paths';
import {  } from 'react-router-dom';

// import SignInSignUpPage from '../pages/SignInSignUpPage';
// import QuizMainPage from '../pages/QuizMainPage';

const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Redirect to={PATH.INTRO}></Redirect>
        </Route>
        <Route path={PATH.INTRO} component={QuizIntroductionPage} />

        {/* <Route path={PATH.SIGNIN} component={SignInSignUpPage} /> */}

        {/* <Route path="/quiz" component={QuizMainPage} /> */}
        <Route>
            <Redirect to={PATH.INTRO}></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRoutes;
