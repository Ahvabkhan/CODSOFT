import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Button } from '../styles/styles';

const Home = () => {
  return (
    <Container>
      <Title>Online Quiz Platform</Title>
      <Link to="/quiz">
        <Button>Start Quiz</Button>
      </Link>
    </Container>
  );
};

export default Home;
