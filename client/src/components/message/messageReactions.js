import { StyledMessageReactions } from './messageReactions.styled';
import { emojiReactions } from '../../data/reactions';
import { useThemeContext } from '../../context/ThemeContext';

const MessageReactions = ({ reactions, numOfReactions, msgContainerRef }) => {
   const { isDarkTheme } = useThemeContext();

   return (
      <StyledMessageReactions
         parentWidth={msgContainerRef.current.clientWidth}
         darkMode={isDarkTheme}
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
