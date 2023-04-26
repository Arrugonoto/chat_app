import { useState, useEffect, forwardRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

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

const MessageWindow = forwardRef(
   ({ socket, setChatWindowHeight, setShowNewestBtn }, ref) => {
      const { user } = useAuthContext();
      const { messages, dispatch } = useMessageContext();
      const { themeColors } = useThemeContext();
      const [loading, setLoading] = useState(false);

      const fetchMessages = async () => {
         setLoading(true);

         const response = await fetch(API_URL.GET_MESSAGES, {
            headers: { Authorization: `Bearer ${user.token}` },
         });
         const result = await response.json();

         if (response.ok) {
            dispatch({
               type: MSG_ACTIONS.SET,
               payload: result,
            });
         } else if (!response.ok) {
            console.error(result);
         }
         setLoading(false);
      };

      const handleScroll = scrollbar => {
         if (
            Math.abs(scrollbar.scrollTop) <
            ref?.current?.scrollHeight - 2000
         ) {
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
         console.log(ref.current);
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

      useEffect(() => {
         Scrollbar.use(OverscrollPlugin);
         const scrollbar = Scrollbar.init(ref.current, {
            damping: 0.08,
            plugins: {
               overscroll: {
                  effect: 'bounce',
                  damping: 0.3,
                  maxOverscroll: 150,
               },
            },
         });

         if (scrollbar) {
            scrollbar.addListener(() => handleScroll(scrollbar));
            setTimeout(() => {
               scrollbar.setPosition(0, ref?.current?.scrollHeight);
            }, 300);
         }

         return () => {
            if (scrollbar) {
               scrollbar.destroy();
               scrollbar.removeListener(handleScroll);
            }
         };
      }, []);

      return (
         <MessagesContainer roomColor={themeColors.roomBgColor}>
            <div ref={ref} className="scrollbar-container">
               <div className="messages-wrapper">
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
                        Actually it's awfully quiet for now ¯\_(ツ)_/¯
                     </div>
                  )}

                  {loading &&
                     messages?.length < 1 &&
                     [...Array(10).keys()].map(i => {
                        return <MessageLoadingFrame key={i} index={i} />;
                     })}
               </div>
            </div>
         </MessagesContainer>
      );
   }
);

export default MessageWindow;
