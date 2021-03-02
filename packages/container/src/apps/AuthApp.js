import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

const AuthApp = ({ onAuthChanged }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }, type) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
        }
      },
      onAuthChanged,
      initialPath: history.location.pathname,
    });

    history.listen(onNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
