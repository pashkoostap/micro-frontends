import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, [ref]);

  return <div ref={ref}></div>;
};

export default MarketingApp;
