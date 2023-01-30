import { useState, useRef } from 'react';
// components / styled
import { SectionContainer } from '../styles/SectionContainer.styled';
import { StyledChatWindow } from '../ChatRoom/ChatWindow.styled';
import Header from './Header';
import MessageWindow from './MessageWindow';
import MessageForm from './MessageForm';
import DeleteModal from '../Modal/DeleteModal';
import io from 'socket.io-client';
import { Transition } from 'react-transition-group';

// context
import { useModalContext } from '../../context/ModalContext';

// socket
const socket = io.connect('http://localhost:5000');

// transition styles
const transitionStyles = {
   entering: { scale: 1, transform: 'scale(1.05) translateY(-2rem)' },
   entered: { opacity: 1, transform: 'scale(1.03) translateY(-2rem)' },
   exiting: { opacity: 0, transform: 'scale(0.8)' },
   exited: { opacity: 0, transform: 'scale(0.8)' },
};

const ChatWindow = () => {
   const { openModal } = useModalContext();
   const [chatWindowHeight, setChatWindowHeight] = useState(0);
   const [showNewestBtn, setShowNewestBtn] = useState(false);
   const chatWindowRef = useRef(null);
   const newestBtnRef = useRef(null);

   const handleClick = () => {
      chatWindowRef.current.scrollTo({
         top: chatWindowHeight,
         behavior: 'smooth',
      });
   };

   return (
      <SectionContainer>
         <StyledChatWindow>
            <Header></Header>
            <MessageWindow
               socket={socket}
               ref={chatWindowRef}
               setChatWindowHeight={setChatWindowHeight}
               setShowNewestBtn={setShowNewestBtn}
            />
            <Transition
               nodeRef={newestBtnRef}
               in={showNewestBtn}
               timeout={300}
               unmountOnExit={true}
               appear={true}
            >
               {state => (
                  <button
                     className="btn-scroll-bottom"
                     ref={newestBtnRef}
                     onPointerDown={() => handleClick()}
                     style={{ ...transitionStyles[state] }}
                  >
                     Jump to newest{' '}
                  </button>
               )}
            </Transition>

            <MessageForm socket={socket} />
         </StyledChatWindow>
         {openModal && <DeleteModal />}
      </SectionContainer>
   );
};

export default ChatWindow;
