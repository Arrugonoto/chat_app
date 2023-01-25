import { createContext, useContext, useReducer, useState } from 'react';

const MessagesContext = createContext();

export const useMessageContext = () => useContext(MessagesContext);

export const MSG_ACTIONS = {
   SET: 'GET_MESSAGES',
   CREATE: 'CREATE_MESSAGE',
   MODIFY: 'EDIT_MESSAGE',
   DELETE: 'DELETE_MESSAGE',
};

export const messagesReducer = (state, action) => {
   switch (action.type) {
      case MSG_ACTIONS.SET:
         return { messages: action.payload };
      case MSG_ACTIONS.CREATE:
         return { messages: [action.payload, ...state.messages] };
      case MSG_ACTIONS.MODIFY:
         return { messages: action.payload };
      case MSG_ACTIONS.DELETE:
         return {
            messages: [
               state.messages.filter(el => el._id !== action.payload._id),
            ],
         };
      default:
         return state;
   }
};

export const MessagesContextProvider = ({ children }) => {
   const [messageId, setMessageId] = useState('');
   const [state, dispatch] = useReducer(messagesReducer, { messages: [] });

   return (
      <MessagesContext.Provider
         value={{ ...state, dispatch, messageId, setMessageId }}
      >
         {children}
      </MessagesContext.Provider>
   );
};
