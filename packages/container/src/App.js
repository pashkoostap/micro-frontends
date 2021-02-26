import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarketingApp } from './apps';
import { Header } from './components';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  </div>
);

export default App;
