import { useEffect } from 'react';
// components / styles
import { StyledDeleteModal } from './DeleteModal.styled';

// context
import { useModalContext } from '../../context/ModalContext';
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

// icons
import { FaTrashAlt } from 'react-icons/fa';

const DELETE_URL = 'http://localhost:5000/api/messages/';

const DeleteModal = () => {
   const { openModal, setOpenModal } = useModalContext();
   const { messageId, setMessageId, dispatch } = useMessageContext();
   const { user } = useAuthContext();

   const handleCancel = () => {
      setOpenModal(false);
      setMessageId('');
   };

   const handleDelete = async () => {
      const response = await fetch(DELETE_URL + messageId, {
         method: 'DELETE',
         headers: { Authorization: `Bearer ${user.token}` },
      });
      const result = await response.json();

      if (response.ok) {
         dispatch({ type: MSG_ACTIONS.DELETE, payload: result });
         setOpenModal(false);
      }
   };

   useEffect(() => {
      const handleKeyDown = e => {
         if (e.key === 'Escape') {
            setOpenModal(false);
         }
      };

      if (openModal) {
         window.addEventListener('keydown', handleKeyDown);
      } else {
         window.removeEventListener('keydown', handleKeyDown);
      }

      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [openModal, setOpenModal]);

   return (
      <StyledDeleteModal>
         <article>
            <h1>Delete message</h1>
            <p>
               Are You sure You want to <span>delete </span>this message?
            </p>
            <div>
               <button onClick={handleCancel}>Cancel</button>
               <button onClick={handleDelete}>
                  Delete <FaTrashAlt />
               </button>
            </div>
         </article>
      </StyledDeleteModal>
   );
};

export default DeleteModal;
