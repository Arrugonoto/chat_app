import { createContext, useContext, useReducer, useState, useRef } from 'react';

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
         return {
            messages: state.messages.map(el =>
               el._id !== action.payload._id ? el : action.payload
            ),
         };
      case MSG_ACTIONS.DELETE:
         return {
            messages: state.messages.filter(
               el => el._id !== action.payload._id
            ),
         };
      default:
         return state;
   }
};

export const MessagesContextProvider = ({ children }) => {
   const [editFlag, setEditFlag] = useState(false);
   const [messageId, setMessageId] = useState('');
   const [messageValue, setMessageValue] = useState('');
   const [state, dispatch] = useReducer(messagesReducer, { messages: [] });
   const messageInputRef = useRef(null);

   return (
      <MessagesContext.Provider
         value={{
            ...state,
            dispatch,
            messageId,
            setMessageId,
            editFlag,
            setEditFlag,
            messageInputRef,
            messageValue,
            setMessageValue,
         }}
      >
         {children}
      </MessagesContext.Provider>
   );
};
