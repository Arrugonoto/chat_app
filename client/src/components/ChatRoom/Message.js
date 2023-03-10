import { useState, useEffect, useRef } from 'react';
// components
import { StyledMessage, MsgOptionsBtn } from './MessagesWindow.styled';
import MessageOptions from './MessageOptions';

// libraries
import moment from 'moment';
import { FaEllipsisV } from 'react-icons/fa';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useThemeContext } from '../../context/ThemeContext';

const Message = ({ message, nextDay, nextId, prevId }) => {
   const { user } = useAuthContext();
   const { themeColors } = useThemeContext();
   const [displayOptions, setDisplayOptions] = useState(false);
   const optionsBtnRef = useRef(null);
   const dayAfter = moment(nextDay).format('Do MMM YYYY');
   const sendDate = moment(message.createdAt).format('Do MMM YYYY');

   const handleClick = e => {
      if (!optionsBtnRef.current.contains(e.target)) {
         setDisplayOptions(false);
      }
   };

   useEffect(() => {
      if (displayOptions) {
         window.addEventListener('click', handleClick);
      } else {
         window.removeEventListener('click', handleClick);
      }

      return () => {
         window.removeEventListener('click', handleClick);
      };
   }, [displayOptions, setDisplayOptions]);

   return (
      <>
         <StyledMessage
            user={user._id === message.user_id}
            userColor={message.userColor}
            nextUser={nextId !== message.user_id}
            prevUser={prevId !== message.user_id}
            messageColor={themeColors.messageBgColor}
         >
            {dayAfter !== sendDate && (
               <div className="date-day">
                  <p>{sendDate}</p>
               </div>
            )}
            <div className="message-wrapper">
               {user._id !== message.user_id && (
                  <div className="username-wrapper">
                     {(nextId !== message.user_id || dayAfter !== sendDate) && (
                        <p className="username">{message.username.charAt(0)}</p>
                     )}
                  </div>
               )}
               <p
                  className={`message-text ${
                     user._id === message.user_id && 'logged-user'
                  }`}
               >
                  {message.text}
               </p>
               {user._id !== message.user_id && (
                  <span className="span-username">{message.username}</span>
               )}
               <span className="send-time">
                  <p>{moment(message.createdAt).format('HH:mm:ss')}</p>
               </span>
               <div className="options-btn-wrapper">
                  {user._id === message.user_id && (
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
                     user={user._id === message.user_id}
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
