import { forwardRef } from 'react';
import { StyledReactionButtons } from './MessageReactions.styled';

import { emojiReactions } from '../../data/reactions';

import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

import { API_URL, METHODS } from '../../services/api';

// hooks
import useFetch from '../../hooks/useFetch';

const ReactionButtons = forwardRef(
   ({ loggedUser, reactions, setReactions, id }, ref) => {
      const { user } = useAuthContext();
      const { setMessageId } = useMessageContext();
      const { fetchData } = useFetch();

      const handleClick = e => {
         const newReactions = { ...reactions };
         const selectedMessageId = id;

         if (
            Object.values(newReactions).some(array =>
               array.includes(user.name)
            ) &&
            newReactions[e.target.title].includes(user.name)
         ) {
            Object.values(newReactions).forEach(array => {
               const searchIndex = array.indexOf(user.name);
               if (searchIndex !== -1) {
                  array.splice(searchIndex, 1);
               }
            });
         } else if (
            Object.values(newReactions).some(array => array.includes(user.name))
         ) {
            Object.values(newReactions).forEach(array => {
               const searchIndex = array.indexOf(user.name);
               if (searchIndex !== -1) {
                  array.splice(searchIndex, 1);
               }
            });

            newReactions[e.target.title].push(user.name);
         } else {
            newReactions[e.target.title].push(user.name);
         }
         setReactions(newReactions);
         setMessageId(selectedMessageId);

         handleFetch(selectedMessageId);
         ref.current.style.display = 'none';
      };

      const handleFetch = async id => {
         const options = {
            method: METHODS.PATCH,
            body: JSON.stringify({ reactions }),
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${user.token}`,
            },
         };

         await fetchData(`${API_URL.EDIT_MESSAGE + id}/reactions`, options, {
            dispatchMsgType: MSG_ACTIONS.MODIFY,
         });
      };

      return (
         <StyledReactionButtons user={loggedUser} ref={ref}>
            {emojiReactions.map(el => (
               <button
                  type="button"
                  key={el.id}
                  title={el.name}
                  onClick={e => handleClick(e)}
               >
                  {el.value}
               </button>
            ))}
         </StyledReactionButtons>
      );
   }
);

export default ReactionButtons;
