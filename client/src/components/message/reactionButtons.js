import { forwardRef } from 'react';
import { StyledReactionButtons } from './messageReactions.styled';

import { emojiReactions } from '../../data/reactions';

import { useAuthContext } from '../../context/AuthContext';
import { useMessageContext, MSG_ACTIONS } from '../../context/MessagesContext';

import { API_URL, METHODS } from '../../services/api';

const ReactionButtons = forwardRef(
   ({ loggedUser, reactions, setReactions, id }, ref) => {
      const { user } = useAuthContext();
      const { dispatch, messageId, setMessageId } = useMessageContext();

      const handleClick = e => {
         const newReactions = { ...reactions };

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
         setMessageId(id);

         handleFetch();
         ref.current.style.display = 'none';
      };

      const handleFetch = async () => {
         const response = await fetch(
            `${API_URL.EDIT_MESSAGE + messageId}/reactions`,
            {
               method: METHODS.PATCH,
               body: JSON.stringify({ reactions }),
               headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${user.token}`,
               },
            }
         );

         const result = await response.json();

         if (response.ok) {
            dispatch({ type: MSG_ACTIONS.MODIFY, payload: result });
         } else {
            console.error(result);
         }
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
