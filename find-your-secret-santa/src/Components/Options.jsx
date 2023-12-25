// Options.js
import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

const Options = ({ options, handleAnswer }) => {
  return (
    <Stack spacing={4} mt={4}>
      {options.map((option, index) => (
        <Button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </Button>
      ))}
    </Stack>
  );
};

export default Options;
