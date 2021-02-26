import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate }) => {
  const history =
    process.env.NODE_ENV === 'development'
      ? createBrowserHistory()
      : createMemoryHistory();

  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onNavigate({ pathname }, type) {
      if (history.location.pathname !== pathname) {
        history.push(pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('marketing-dev');

  if (el) {
    mount(el, { onNavigate: () => {} });
  }
}

export { mount };
