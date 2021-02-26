import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarketingApp } from './apps';
import { Header } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
  seed: 'con',
});

const App = () => (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  </div>
);

export default App;
