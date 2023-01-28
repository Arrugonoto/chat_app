import { useState, useRef, useEffect } from 'react';
// components / styled
import { SectionContainer } from '../styles/SectionContainer.styled';
import { StyledChatWindow } from '../ChatRoom/ChatWindow.styled';
import Header from './Header';
import MessageWindow from './MessageWindow';
import MessageForm from './MessageForm';
import DeleteModal from '../Modal/DeleteModal';
import io from 'socket.io-client';

// context
import { useModalContext } from '../../context/ModalContext';

const socket = io.connect('http://localhost:5000');

const ChatWindow = () => {
   const { openModal } = useModalContext();
   const [chatWindowHeight, setChatWindowHeight] = useState(0);
   const chatWindowRef = useRef(null);

   const handleClick = () => {
      chatWindowRef.current.scrollTo({
         top: chatWindowHeight,
         behavior: 'smooth',
      });
      console.log('clicked');
   };

   return (
      <SectionContainer>
         <StyledChatWindow>
            <Header></Header>
            <MessageWindow
               socket={socket}
               ref={chatWindowRef}
               setChatWindowHeight={setChatWindowHeight}
            />
            <button className="btn-scroll-bottom" onClick={() => handleClick()}>
               Jump to newest{' '}
            </button>
            <MessageForm socket={socket} />
         </StyledChatWindow>
         {openModal && <DeleteModal />}
      </SectionContainer>
   );
};

export default ChatWindow;
