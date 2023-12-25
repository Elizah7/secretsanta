// ResultPage.jsx
import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';


const ResultPage = () => {
    let answerarray = JSON.parse(localStorage.getItem("answerarray"))||[]; 
  return (
    <Container maxW="xl" centerContent className='container'>
      <Box p={8} borderRadius="lg">
        <Heading mb={4}>Prashant's Answers</Heading>
        {answerarray.map((answer, index) => (
          <Box key={index} mb={2}>
            <Text>{`Question ${index + 1}: ${answer}`}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ResultPage;
