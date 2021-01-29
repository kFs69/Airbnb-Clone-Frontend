import React, { useRef } from 'react';

import { 
  ContainerModal,
  ModalOverlay,
  ModalBox,
  ModalCloseButton,
  ModalTitle,
  ModalContent,
  ModalHeader
} from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(e.target === overlayRef.current) {
      onClose();
    }
  }

  return isOpen ? (
    <ContainerModal>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick} />
      <ModalBox>
        <ModalHeader>
          <ModalCloseButton size={25} onClick={onClose} color={'gray'} />
          <ModalTitle>
            {title}
          </ModalTitle>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalBox>
    </ContainerModal>
  ) : null;
};