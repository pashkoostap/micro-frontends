import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }, type) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
        }
      },
    });

    history.listen(onNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
