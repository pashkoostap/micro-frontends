import React, { Fragment } from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { Router, Route, Switch } from 'react-router-dom';

import { Landing, Pricing } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = ({ history }) => (
  <Fragment>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  </Fragment>
);

export default App;
