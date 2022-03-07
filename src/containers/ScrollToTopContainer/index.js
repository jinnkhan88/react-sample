import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const ref = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ref, pathname]);

  return (
    <div ref={ref} className="scroll-content">
      {children}
    </div>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollToTop;
