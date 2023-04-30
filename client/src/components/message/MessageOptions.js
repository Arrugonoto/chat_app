// components
import { StyledMessageOptions } from './MessageOptions.styled';

// context
import { useMessageContext } from '../../context/MessagesContext';
import { useModalContext } from '../../context/ModalContext';

// icons
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';

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

   useConditionalListener('keydown', handleKeyDown, displayOptions);

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
