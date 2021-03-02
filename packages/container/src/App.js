import React, { Suspense, lazy, useState } from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Loader } from './components';

const MarketingApp = lazy(() => import('./apps/MarketingApp'));
const AuthApp = lazy(() => import('./apps/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header
            currentUser={currentUser}
            onSignOut={() => setCurrentUser(null)}
          />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onAuthChanged={setCurrentUser} />
              </Route>
              <Route path='/' component={MarketingApp} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
