import React, { Suspense, lazy, useState, useEffect } from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Header, Loader } from './components';

const MarketingApp = lazy(() => import('./apps/MarketingApp'));
const AuthApp = lazy(() => import('./apps/AuthApp'));
const DashboardApp = lazy(() => import('./apps/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});

const history = createBrowserHistory();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (currentUser) {
      history.push('/dashboard');
    } else {
      history.push('/');
    }
  }, [currentUser]);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Header
            currentUser={currentUser}
            onSignOut={() => setCurrentUser(null)}
          />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onAuthChanged={setCurrentUser} />
              </Route>
              <Route path='/dashboard'>
                {Boolean(currentUser) ? <DashboardApp /> : <Redirect to='/' />}
              </Route>
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
