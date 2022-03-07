import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './styles.scss';

const Loading = () => (
  <div className="text-center loading-container">
    <Spinner animation="border" role="status" className="loading-spinner" />
    <div className="pt-5 large-text bold-text">
      Loading...
    </div>
    <div>
      Please be patient as the page loads.
    </div>
  </div>
);

export default Loading;
