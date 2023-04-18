import { forwardRef } from 'react';
import { StyledReactionButtons } from './messageReactions.styled';

import { emojiReactions } from '../../data/reactions';

import { useAuthContext } from '../../context/AuthContext';

const ReactionButtons = forwardRef(
   ({ loggedUser, reactions, setReactions }, ref) => {
      const { user } = useAuthContext();

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

         console.log(reactions);
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
