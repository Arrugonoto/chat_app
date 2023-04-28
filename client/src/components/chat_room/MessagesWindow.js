import { useEffect, forwardRef } from 'react';

// components
import { MessagesContainer } from './MessagesWindow.styled';
import Message from '../message/Message';
import MessageLoadingFrame from '../loader/MessageLoadingFrame';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';
import { useThemeContext } from '../../context/ThemeContext';

// api
import { API_URL } from '../../services/api';

// hooks
import useFetch from '../../hooks/useFetch';

const MessageWindow = forwardRef(
   ({ socket, setChatWindowHeight, setShowNewestBtn }, ref) => {
      const { user } = useAuthContext();
      const { messages, dispatch } = useMessageContext();
      const { themeColors } = useThemeContext();
      const { fetchData, loading, errorMessage } = useFetch();

      const fetchMessages = async () => {
         const options = {
            headers: { Authorization: `Bearer ${user.token} ` },
         };

         await fetchData(API_URL.GET_MESSAGES, options, {
            dispatchMsgType: MSG_ACTIONS.SET,
         });
      };

      const handleScroll = () => {
         if (Math.abs(ref?.current?.scrollTop) > 2000) {
            setShowNewestBtn(true);
         } else {
            setShowNewestBtn(false);
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
            if (ref.current) {
               setChatWindowHeight(ref?.current?.scrollHeight);
            }
         });
         // eslint-disable-next-line
      }, [socket]);

      return (
         <MessagesContainer
            roomColor={themeColors.roomBgColor}
            ref={ref}
            onScroll={handleScroll}
         >
            {messages?.map((message, index, array) => (
               <Message
                  key={message._id}
                  message={message}
                  nextId={array[index + 1]?.user_id ?? false}
                  prevId={array[index - 1]?.user_id ?? false}
                  nextDay={array[index + 1]?.createdAt ?? false}
               />
            ))}

            {!loading && messages?.length === 0 && (
               <div
                  style={{
                     display: 'flex',
                     justifySelf: 'end',
                     alignSelf: 'center',
                     paddingBottom: '10rem',
                  }}
               >
                  {errorMessage ? (
                     <p>{errorMessage}</p>
                  ) : (
                     <p>Actually it's awfully quiet for now ¯\_(ツ)_/¯</p>
                  )}
               </div>
            )}

            {loading &&
               messages?.length < 1 &&
               [...Array(10).keys()].map(i => {
                  return <MessageLoadingFrame key={i} index={i} />;
               })}
         </MessagesContainer>
      );
   }
);

export default MessageWindow;
