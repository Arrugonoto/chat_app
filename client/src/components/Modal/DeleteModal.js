import { useEffect, useRef } from 'react';

// components / styles
import { StyledDeleteModal } from './DeleteModal.styled';

// context
import { useModalContext } from '../../context/ModalContext';
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

// api
import { API_URL, METHODS } from '../../services/api';

// icons
import { FaTrashAlt } from 'react-icons/fa';

const DeleteModal = () => {
   const { openModal, setOpenModal } = useModalContext();
   const { messageId, setMessageId, dispatch } = useMessageContext();
   const { user } = useAuthContext();
   const deleteBtnRef = useRef(null);

   const handleCancel = () => {
      setOpenModal(false);
      setMessageId('');
   };

   const handleDelete = async () => {
      const response = await fetch(API_URL.DELETE_MESSAGE + messageId, {
         method: METHODS.DELETE,
         headers: { Authorization: `Bearer ${user.token}` },
      });
      const result = await response.json();

      if (response.ok) {
         dispatch({ type: MSG_ACTIONS.DELETE, payload: result });
      } else if (!response.ok) {
         console.error(result);
      }
      setOpenModal(false);
   };

   const handleKeyDown = e => {
      if (e.key === 'Escape') {
         setOpenModal(false);
      }
   };

   useEffect(() => {
      if (openModal) {
         window.addEventListener('keydown', handleKeyDown);
      } else {
         window.removeEventListener('keydown', handleKeyDown);
      }

      return () => window.removeEventListener('keydown', handleKeyDown);
      // eslint-disable-next-line
   }, [openModal, setOpenModal]);

   useEffect(() => {
      deleteBtnRef.current.focus();
   }, []);

   return (
      <StyledDeleteModal>
         <article>
            <h1>Delete message</h1>
            <p>
               Are You sure You want to <span>delete </span>this message?
            </p>
            <div>
               <button onClick={handleCancel}>Cancel</button>
               <button onClick={handleDelete} ref={deleteBtnRef}>
                  Delete <FaTrashAlt />
               </button>
            </div>
         </article>
      </StyledDeleteModal>
   );
};

export default DeleteModal;
