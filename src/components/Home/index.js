import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles.scss';

const Home = () => (
  <Container fluid className="home-container">
    <div>
      <h1>Hello, World!</h1>
    </div>
    <div>
      <h3>This is a custom react template.</h3>
    </div>
  </Container>
);

export default Home;
