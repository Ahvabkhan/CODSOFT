import React from 'react';
import { QuestionContainer, Button } from '../styles/styles';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <QuestionContainer>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <Button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </Button>
      ))}
    </QuestionContainer>
  );
};

export default Question;
