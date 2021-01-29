import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
`;

export const ModalBox = styled.div`
  position: relative;
  width: 100% !important;
  max-width: 568px;
  margin: 0 10%;
  /* padding: 50px; */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #FFF;
  cursor: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

export const ModalCloseButton = styled(MdClose)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ModalContent = styled.div`
  padding: 24px;
  flex: 1 1 auto;
  overflow-y: auto;
  outline: none;
`;