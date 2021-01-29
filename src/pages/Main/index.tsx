import React, { useState } from 'react';

import { Container } from './styles';

import { Modal } from '../../components/Modal';
import { Input } from "../../components/Input";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Container>
      <button onClick={toggleModal}>
        Modal
      </button>
      <Modal
        title='Log in'
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        This is some content
      </Modal>
      <Input type='text' />
    </Container>  
  );
}

export default Main;