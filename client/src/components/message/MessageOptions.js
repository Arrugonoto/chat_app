import { useEffect } from 'react';

// components
import { StyledMessageOptions } from './MessageOptions.styled';

// context
import { useMessageContext } from '../../context/MessagesContext';
import { useModalContext } from '../../context/ModalContext';

// icons
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const MessageOptions = ({ displayOptions, setDisplayOptions, id, text }) => {
   const { setOpenModal } = useModalContext();
   const { setMessageId, setMessageValue, setEditFlag, messageInputRef } =
      useMessageContext();

   const handleDelete = () => {
      setDisplayOptions(false);
      setOpenModal(true);
      setMessageId(id);
   };

   const handleEdit = () => {
      setEditFlag(true);
      setMessageId(id);
      setMessageValue(text);
      messageInputRef.current.focus();
   };

   const handleKeyDown = e => {
      if (e.key === 'Escape') {
         setDisplayOptions(false);
      }
   };

   useEffect(() => {
      if (displayOptions) {
         window.addEventListener('keydown', handleKeyDown);
      } else {
         window.removeEventListener('keydown', handleKeyDown);
      }

      return () => window.removeEventListener('keydown', handleKeyDown);
      // eslint-disable-next-line
   }, [displayOptions, setDisplayOptions]);

   return (
      <StyledMessageOptions>
         <ul>
            <li>
               <button onPointerUp={() => handleEdit()}>
                  Edit <FaEdit />
               </button>
            </li>
            <li>
               <button onPointerUp={() => handleDelete()}>
                  Delete <FaTrashAlt />
               </button>
            </li>
         </ul>
      </StyledMessageOptions>
   );
};

export default MessageOptions;
