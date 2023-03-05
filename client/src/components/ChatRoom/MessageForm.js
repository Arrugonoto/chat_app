import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

// components
import {
   MessageFormContainer,
   StyledMessageForm,
   SendMessageBtn,
} from './MessageForm.styled';

// React icons Font-Awesome
import { FaRegPaperPlane } from 'react-icons/fa';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

const SEND_URL = 'http://localhost:5000/api/messages';
const REGEX = /^\s*$/;

const MessageForm = ({ socket }) => {
   const { user } = useAuthContext();
   const {
      dispatch,
      messageInputRef,
      messageId,
      editFlag,
      setEditFlag,
      messageValue,
      setMessageValue,
   } = useMessageContext();
   const [text, setText] = useState('');
   const [containsWhitespace, setContainsWhitespace] = useState(true);

   const handleChange = e => {
      setText(e.target.value);
      if (editFlag) setMessageValue(e.target.value);
   };
   const handleSubmit = async e => {
      e.preventDefault();
      const requestMethod = editFlag ? 'PATCH' : 'POST';
      const dataToSend = editFlag ? messageValue : text;
      const url = editFlag ? `${SEND_URL}/${messageId}` : SEND_URL;
      const dispatchType = editFlag ? MSG_ACTIONS.MODIFY : MSG_ACTIONS.CREATE;

      const response = await fetch(url, {
         method: requestMethod,
         body: JSON.stringify({ text: dataToSend }),
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
         },
      });

      const result = await response.json();

      if (response.ok) {
         dispatch({ type: dispatchType, payload: result });
         resetForm();
         if (editFlag) setEditFlag(false);
      } else {
         console.error(result);
      }
   };

   const handleKeyUp = () => {
      const whitespaces = REGEX.test(text);
      setContainsWhitespace(whitespaces);
   };

   const handleKeyDown = e => {
      if (e.key === 'Enter') {
         e.preventDefault();
      }
      if (!e.shiftKey && !containsWhitespace && e.key === 'Enter') {
         e.preventDefault();
         handleSubmit(e);
      }
      if (e.shiftKey && e.key === 'Enter') {
         setText(text + '\r\n');
      }
      if (e.key === 'Tab') {
         e.preventDefault();
         setText(text + '\t');
      }
   };

   const handleCancelEdit = () => {
      setEditFlag(false);
      resetForm();
   };

   const resetForm = () => {
      setText('');
   };

   return (
      <MessageFormContainer>
         {editFlag && (
            <button className="btn-cancel-edit" onPointerUp={handleCancelEdit}>
               Cancel edit
            </button>
         )}
         <StyledMessageForm onSubmit={handleSubmit}>
            <label htmlFor="text" />
            <TextareaAutosize
               type="text"
               value={editFlag ? messageValue : text}
               onChange={handleChange}
               id="text"
               name="text"
               onKeyDown={handleKeyDown}
               onKeyUp={handleKeyUp}
               maxRows={4}
               ref={messageInputRef}
            />
            <SendMessageBtn
               disabled={text && !containsWhitespace ? false : true}
               title="Send message"
            >
               <FaRegPaperPlane />
            </SendMessageBtn>
         </StyledMessageForm>
      </MessageFormContainer>
   );
};

export default MessageForm;
