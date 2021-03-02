import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (
  el,
  { onNavigate, onAuthChanged, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  history.listen(onNavigate);

  ReactDOM.render(<App history={history} onAuthChanged={onAuthChanged} />, el);

  return {
    onNavigate({ pathname }, type) {
      if (history.location.pathname !== pathname) {
        history.push(pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('auth-dev');

  if (el) {
    mount(el, {
      onNavigate: () => {},
      onAuthChanged: () => {},
      defaultHistory: createBrowserHistory(),
      initialPath: '/',
    });
  }
}

export { mount };
