import styled from 'styled-components';

export const StyledMessageReactions = styled.div`
   position: absolute;
   display: flex;
`;

export const StyledReactionButtons = styled.div`
   display: none;
   position: absolute;
   bottom: -1.9rem;
   left: 2.1rem;
   padding: 0.2rem 0.2rem;
   border-radius: 0.8rem;
   background-color: ${props => props.theme.informational};
   box-shadow: 0 0 0.3rem 0 rgba(1, 1, 1, 0.3);
   gap: 0.1rem;
   border: 1px solid rgb(150, 150, 150);

   button {
      font-size: 1.3rem;
      transition: all 0.2s ease;
      &:hover {
         scale: 1.2;
      }
   }
`;
