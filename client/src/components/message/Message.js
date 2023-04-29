import { useState, useEffect, useRef } from 'react';

// components
import { MsgOptionsBtn } from '../chat_room/MessagesWindow.styled';
import { StyledMessage } from './Message.styled';
import MessageOptions from './MessageOptions';
import ReactionButtons from './ReactionButtons';
import MessageReactions from './MessageReactions';

// packages
import moment from 'moment';

// icons
import { FaEllipsisV } from 'react-icons/fa';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useThemeContext } from '../../context/ThemeContext';

const Message = ({ message, nextDay, nextId, prevId }) => {
   const { user } = useAuthContext();
   const { themeColors, isDarkTheme } = useThemeContext();
   const [displayOptions, setDisplayOptions] = useState(false);
   const [reactions, setReactions] = useState({
      like: [],
      funny: [],
      wholesome: [],
      fear: [],
      astonished: [],
      angry: [],
   });
   const optionsBtnRef = useRef(null);
   const reactionBtnsRef = useRef(null);
   const msgContainerRef = useRef(null);
   const dayAfter = moment(nextDay).format('Do MMM YYYY');
   const sendDate = moment(message.createdAt).format('Do MMM YYYY');
   const offlineUser = user._id !== message.user_id;
   const loggedUser = user._id === message.user_id;
   const numOfReactions = Object.values(reactions)?.flat().length;

   const handlePointerDown = e => {
      if (!optionsBtnRef.current.contains(e.target)) {
         setDisplayOptions(false);
      }
   };

   const handlePointerOver = () => {
      if (offlineUser) reactionBtnsRef.current.style.display = 'flex';
   };

   const handlePointerOut = () => {
      if (offlineUser) reactionBtnsRef.current.style.display = 'none';
   };

   useEffect(() => {
      if (displayOptions) {
         window.addEventListener('click', handlePointerDown);
      } else {
         window.removeEventListener('click', handlePointerDown);
      }

      return () => {
         window.removeEventListener('click', handlePointerDown);
      };
   }, [displayOptions, setDisplayOptions]);

   useEffect(() => {
      setReactions(prev => ({
         ...prev,
         ...message.reactions,
      }));
   }, []);

   return (
      <>
         <StyledMessage
            user={loggedUser}
            userColor={message.userColor}
            nextUser={nextId !== message.user_id}
            prevUser={prevId !== message.user_id}
            messageColor={themeColors.messageBgColor}
            darkMode={isDarkTheme}
         >
            {dayAfter !== sendDate && (
               <div className="date-day">
                  <p>{sendDate}</p>
               </div>
            )}
            <div className="message-container" ref={msgContainerRef}>
               {offlineUser && (
                  <div className="username-wrapper">
                     {(nextId !== message.user_id || dayAfter !== sendDate) && (
                        <p className="username">{message.username.charAt(0)}</p>
                     )}
                  </div>
               )}
               <div
                  className="message-wrapper"
                  onPointerOver={() => handlePointerOver()}
                  onPointerOut={() => handlePointerOut()}
               >
                  <p className={`message-text ${loggedUser && 'logged-user'}`}>
                     {message.text}
                  </p>

                  {offlineUser && (
                     <ReactionButtons
                        ref={reactionBtnsRef}
                        loggedUser={loggedUser}
                        reactions={reactions}
                        setReactions={setReactions}
                        numOfReactions={numOfReactions}
                        id={message._id}
                     />
                  )}
               </div>
               {numOfReactions > 0 && (
                  <MessageReactions
                     reactions={reactions}
                     numOfReactions={numOfReactions}
                     msgContainerRef={msgContainerRef}
                     user={loggedUser}
                  />
               )}
               {user._id !== message.user_id && (
                  <span className="span-username">{message.username}</span>
               )}
               <span className="send-time">
                  <p>{moment(message.createdAt).format('HH:mm:ss')}</p>
               </span>
               <div className="options-btn-wrapper">
                  {loggedUser && (
                     <MsgOptionsBtn
                        ref={optionsBtnRef}
                        onPointerDown={() => setDisplayOptions(state => !state)}
                     >
                        <FaEllipsisV className="options-icon" />
                     </MsgOptionsBtn>
                  )}
               </div>

               {displayOptions && (
                  <MessageOptions
                     user={loggedUser}
                     displayOptions={displayOptions}
                     setDisplayOptions={setDisplayOptions}
                     id={message._id}
                     text={message.text}
                  />
               )}
            </div>
         </StyledMessage>
      </>
   );
};

export default Message;
