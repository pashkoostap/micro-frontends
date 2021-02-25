import React, { Fragment } from 'react';
import { StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, Pricing } from './components';

const App = (props) => (
  <Fragment>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </Fragment>
);

export default App;
