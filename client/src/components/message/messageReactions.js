// components
import { StyledMessageReactions } from './MessageReactions.styled';
import { emojiReactions } from '../../data/reactions';

// context
import { useThemeContext } from '../../context/ThemeContext';

const MessageReactions = ({
   reactions,
   numOfReactions,
   msgContainerRef,
   user,
}) => {
   const { isDarkTheme } = useThemeContext();

   return (
      <StyledMessageReactions
         parentWidth={msgContainerRef.current.clientWidth}
         darkMode={isDarkTheme}
         user={user}
      >
         <span>{numOfReactions}</span>
         {Object.values(reactions)?.map((el, i) =>
            el.length > 0 ? (
               <span key={emojiReactions[i].id}>{emojiReactions[i].value}</span>
            ) : null
         )}
      </StyledMessageReactions>
   );
};

export default MessageReactions;
