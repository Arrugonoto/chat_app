import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

// components
import {
   MessageFormContainer,
   StyledMessageForm,
   SendMessageBtn,
} from './MessageForm.styled';
import EmojiPicker from './EmojiPicker';

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
   const [containsWhitespace, setContainsWhitespace] = useState(true);
   const [displayPicker, setDisplayPicker] = useState(false);
   const showPickerBtn = useRef(null);

   const handleChange = e => {
      setMessageValue(e.target.value);
   };
   const handleSubmit = async e => {
      e.preventDefault();
      const requestMethod = editFlag ? METHODS.PATCH : METHODS.POST;
      const url = editFlag
         ? `${API_URL.CREATE_MESSAGE + messageId}/text`
         : API_URL.CREATE_MESSAGE;
      const dispatchType = editFlag ? MSG_ACTIONS.MODIFY : MSG_ACTIONS.CREATE;

      const response = await fetch(url, {
         method: requestMethod,
         body: JSON.stringify({ text: messageValue }),
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
      const whitespaces = REGEX.test(messageValue);
      setContainsWhitespace(whitespaces);
   };

   const handleKeyDown = e => {
      if (e.key === 'Enter') {
         e.preventDefault();
      }
      if (e.key === 'Escape') e.target.blur();
      if (!e.shiftKey && !containsWhitespace && e.key === 'Enter') {
         e.preventDefault();
         handleSubmit(e);
      }
      if (e.shiftKey && e.key === 'Enter') {
         setMessageValue(messageValue + '\r\n');
      }
      if (e.key === 'Tab') {
         e.preventDefault();
         setMessageValue(messageValue + '\t');
      }
   };

   const handleCancelEdit = () => {
      setEditFlag(false);
      resetForm();
   };

   const resetForm = () => {
      setMessageValue('');
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
               type="button"
               ref={showPickerBtn}
               onPointerDown={() => {
                  setDisplayPicker(prev => !prev);
               }}
               className="btn-picker"
            >
               <p>😆</p>
            </button>
            {displayPicker && (
               <EmojiPicker
                  displayPicker={displayPicker}
                  setDisplayPicker={setDisplayPicker}
                  pickerBtn={showPickerBtn}
               />
            )}
            <label htmlFor="text" />
            <TextareaAutosize
               type="text"
               value={messageValue}
               id="text"
               name="text"
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               onKeyUp={handleKeyUp}
               maxRows={4}
               ref={messageInputRef}
               placeholder="Say hello ^_^"
            />
            <SendMessageBtn
               disabled={messageValue && !containsWhitespace ? false : true}
               title="Send message"
            >
               <FaRegPaperPlane />
            </SendMessageBtn>
         </StyledMessageForm>
      </MessageFormContainer>
   );
};

export default MessageForm;
