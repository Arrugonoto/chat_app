import styled from 'styled-components';

export const StyledMessageReactions = styled.div`
   position: absolute;
   display: flex;
   padding: 0.1rem 0.5rem;
   background-color: rgb(124, 124, 124);
   bottom: -16px;
   left: calc(${props => `${props.parentWidth}px`} - 1rem);
   border-radius: 3rem;
   font-size: 0.9rem;
   white-space: nowrap;
   user-select: none;
   animation: 0.3s pulse-appear ease-in;
   justify-content: center;
   align-items: center;

   span:nth-child(1) {
      background-color: ${props =>
         props.darkMode ? 'rgb(19, 116, 146)' : 'rgb(27, 163, 204)'};
      padding: 0 0.4rem;
      border-radius: 1rem;
   }

   @keyframes pulse-appear {
      0%,
      100% {
         scale: 1;
      }

      50% {
         scale: 1.1;
      }
   }
`;

export const StyledReactionButtons = styled.div`
   display: none;
   position: absolute;
   bottom: -1.8rem;
   left: 2.1rem;
   padding: 0.2rem 0.2rem;
   border-radius: 0.8rem;
   background-color: ${props => props.theme.informational};
   box-shadow: 0 0 0.3rem 0 rgba(1, 1, 1, 0.3);
   gap: 0.1rem;
   border: 1px solid rgb(150, 150, 150);
   z-index: 10;

   button {
      font-size: 1.3rem;
      transition: all 0.2s ease;
      &:hover {
         scale: 1.2;
      }
      &:active {
         scale: 1.1;
      }
   }
`;
