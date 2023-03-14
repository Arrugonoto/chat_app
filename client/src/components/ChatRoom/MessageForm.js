import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

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

// api
import { API_URL, METHODS } from '../../services/api';

const REGEX = /^\s*$/;

const MessageForm = () => {
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
   const [displayPicker, setDisplayPicker] = useState(false);

   const handleChange = e => {
      setText(e.target.value);
      if (editFlag) setMessageValue(e.target.value);
   };
   const handleSubmit = async e => {
      e.preventDefault();
      const requestMethod = editFlag ? METHODS.PATCH : METHODS.POST;
      const dataToSend = editFlag ? messageValue : text;
      const url = editFlag
         ? `${API_URL.CREATE_MESSAGE + messageId}`
         : API_URL.CREATE_MESSAGE;
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
            <button
               onPointerDown={() => {
                  setDisplayPicker(true);
               }}
               className="btn-picker"
            >
               😆
            </button>
            {displayPicker && (
               <Picker
                  data={data}
                  onEmojiSelect={console.log}
                  previewPosition={'top'}
                  maxFrequentRows={2}
                  onClickOutside={() => setDisplayPicker(false)}
                  className="emoji-picker"
               />
            )}
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
