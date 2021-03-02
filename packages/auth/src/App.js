import React, { Fragment } from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { SignIn, SignUp } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onAuthChanged }) => (
  <Fragment>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <SignIn onAuthChanged={onAuthChanged} />
          </Route>
          <Route path='/auth/signup'>
            <SignUp onAuthChanged={onAuthChanged} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </Fragment>
);

export default App;
