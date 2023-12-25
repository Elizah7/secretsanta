// Popup.jsx
import React from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ResultPopup = ({ isOpen, onClose, score }) => {
   
 const navigate = useNavigate()
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="modal">Game Completed!</ModalHeader>
        <ModalBody className="modal">
          <Box>
            <p>Congratulations! You've completed the game.</p>
            <p>Your final score is: {score}</p>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="green" ml={3} onClick={() => navigate("/result")}>
            View Answers
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResultPopup;
