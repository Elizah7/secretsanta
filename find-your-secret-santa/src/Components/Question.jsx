// src/Question.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Question = ({ question }) => {
  return (
    <Box mb={4}>
      <Text fontSize="lg" fontWeight="bold">
        {question}
      </Text>
    </Box>
  );
};

export default Question;
