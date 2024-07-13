import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Question from './Question';
import { Container, Title, Button } from '../styles/styles';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const history = useHistory();

  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Container>
      {showResult ? (
        <div>
          <Title>Your Score: {score}/{quizData.length}</Title>
          <Button onClick={() => history.push('/')}>Go Home</Button>
        </div>
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </Container>
  );
};

export default Quiz;
