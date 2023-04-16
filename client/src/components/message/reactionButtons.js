import { forwardRef } from 'react';
import { StyledReactionButtons } from './messageReactions.styled';

import { emojiReactions } from '../../data/reactions';

const ReactionButtons = forwardRef(({ user }, ref) => {
   return (
      <StyledReactionButtons user={user} ref={ref}>
         {emojiReactions.map(el => (
            <button key={el.id} title={el.name}>
               {el.value}
            </button>
         ))}
      </StyledReactionButtons>
   );
});

export default ReactionButtons;
