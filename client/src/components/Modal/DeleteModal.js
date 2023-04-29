import { useEffect, useRef } from 'react';

// components
import { StyledDeleteModal } from './DeleteModal.styled';

// context
import { useModalContext } from '../../context/ModalContext';
import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

// api
import { API_URL, METHODS } from '../../services/api';

// icons
import { FaTrashAlt } from 'react-icons/fa';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';
import useFetch from '../../hooks/useFetch';

const DeleteModal = () => {
   const { openModal, setOpenModal } = useModalContext();
   const { messageId, setMessageId } = useMessageContext();
   const { user } = useAuthContext();
   const { fetchData } = useFetch();
   const modalRef = useRef(null);
   const deleteBtnRef = useRef(null);

   const handleCancel = () => {
      setOpenModal(false);
      setMessageId('');
   };

   const handleDelete = async () => {
      const options = {
         method: METHODS.DELETE,
         headers: { Authorization: `Bearer ${user.token}` },
      };

      await fetchData(API_URL.DELETE_MESSAGE + messageId, options, {
         dispatchMsgType: MSG_ACTIONS.DELETE,
      });

      setOpenModal(false);
   };

   const handleKeyDown = e => {
      if (e.key === 'Escape') {
         setOpenModal(false);
      }
   };

   const handlePointerDown = e => {
      if (!modalRef.current.contains(e.target)) setOpenModal(false);
   };

   useConditionalListener('keydown', handleKeyDown, openModal);
   useConditionalListener('pointerdown', handlePointerDown, openModal);

   useEffect(() => {
      deleteBtnRef.current.focus();
   }, []);

   return (
      <StyledDeleteModal>
         <article ref={modalRef}>
            <h1>Delete message</h1>
            <p>
               Are You sure, You want to <span>delete </span>this message?
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
