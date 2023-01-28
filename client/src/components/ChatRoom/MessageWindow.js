import { useState, useEffect, forwardRef } from 'react';

// components
import { MessagesContainer } from './MessageWindow.styled';
import Message from './Message';
import MessageLoadingSkeleton from '../Loader/MessageLoadingSkeleton';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

const MESSAGES_URL = 'http://localhost:5000/api/messages';

const MessageWindow = forwardRef(({ socket, setChatWindowHeight }, ref) => {
   const { user } = useAuthContext();
   const { messages, dispatch } = useMessageContext();
   const [loading, setLoading] = useState(true);

   const fetchMessages = async () => {
      setLoading(true);

      const response = await fetch(MESSAGES_URL, {
         headers: { Authorization: `Bearer ${user.token}` },
      });
      const result = await response.json();

      if (response.ok) {
         dispatch({
            type: MSG_ACTIONS.SET,
            payload: result,
         });
         setLoading(false);
      }
   };

   useEffect(() => {
      if (user) {
         fetchMessages();
      }
      // eslint-disable-next-line
   }, [user, dispatch]);

   useEffect(() => {
      socket.on('resend_messages', () => {
         fetchMessages();
         setChatWindowHeight(ref.current.scrollHeight);
      });
      // eslint-disable-next-line
   }, [socket]);

   return (
      <MessagesContainer ref={ref}>
         {messages?.map((message, index, array) => (
            <Message
               key={message._id}
               message={message}
               nextId={array[index + 1]?.user_id ?? false}
               nextDay={array[index + 1]?.createdAt ?? false}
            />
         )) ||
            (!loading && (
               <div
                  style={{
                     display: 'flex',
                     justifySelf: 'end',
                     alignSelf: 'center',
                     paddingBottom: '10rem',
                  }}
               >
                  Actually there aren't any messages for now ¯\_(ツ)_/¯
               </div>
            ))}
         {loading &&
            [...Array(10).keys()].map(i => {
               return <MessageLoadingSkeleton key={i} index={i} />;
            })}
      </MessagesContainer>
   );
});

export default MessageWindow;
