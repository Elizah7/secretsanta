// src/Popup.jsx
import React from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

const Popup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
       onOpen()
    },[])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="modal">"Ho Ho Ho! Welcome, Prashant! Santa is delighted to have you here at Finding Secrect Santa 🎅✨ Ho Ho Ho!"</ModalHeader>
        <ModalBody className="modal">
          <Box>
            <p>Thank you for participating in the Secret Santa game! I am your "Secret Santa" and to find out my name you have to play this small game. Here are the instructions:</p>
            <ul>
              <li>Answer each question carefully.</li>
              <li>My name is hidden in the correct answers so choose only correct answers otherwise, you might not be able to find my name</li>
              <li>Have fun and good luck!</li>
            </ul>
          </Box>
        </ModalBody>
        <ModalFooter className="modal">
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Popup;
