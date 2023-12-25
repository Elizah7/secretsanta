// Game.js
import React, { useState } from 'react';
import questions from './questions';
import { Box, Container, Heading, useDisclosure } from '@chakra-ui/react';
import Question from './Question';
import Options from './Options';
import ResultPopup from './ResultPopup';


const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [score, setScore] = useState(0);
  
  let storedValue = localStorage.getItem("answerarray");
  let answerarray = storedValue ? JSON.parse(storedValue) : [];  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleAnswer = (selectedOption) => {
    // if (selectedOption === questions[currentQuestion].correctAnswer) {
    //     answerarray.push()
    // }
    answerarray.push(selectedOption);
    setScore(pre=>pre+1);
    localStorage.setItem("answerarray", JSON.stringify(answerarray))
    // Move to the next question
    if (currentQuestion + 1 === questions.length) {
        setIsPopupOpen(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
  };


  return (
    <Container maxW="xl" centerContent className='container'>
      <Box p={8} borderRadius="lg">
        <Heading mb={4}>Finding Secret Santa</Heading>
        <Question question={questions[currentQuestion].question} />
        <Options options={questions[currentQuestion].options} handleAnswer={handleAnswer} />
        <ResultPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        score={score}
      />
      </Box>
     
    </Container>
  );
};

export default Game;
