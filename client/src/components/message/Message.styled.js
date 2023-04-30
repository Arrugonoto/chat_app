import styled from 'styled-components';

export const StyledMessage = styled.article.attrs({
   className:
      'username, username-wrapper, message-text, message-wrapper, send-time, message-container, span-username, date-day, options-btn-wrapper, logged-user',
})`
   display: flex;
   position: relative;
   flex-direction: column;
   padding: 0.1rem 0.3rem;
   align-items: flex-start;
   font-size: 0.9rem;
   width: 100%;

   .date-day {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 3rem 0;
      color: ${props => props.theme.fontDate};
   }

   /* nextUser -> next user | prevUser -> previous user | user -> logged-in user */
   .message-container {
      position: relative;
      display: flex;
      flex-direction: ${props => (props.user ? 'row-reverse' : 'row')};
      align-items: center;
      justify-content: center;
      align-self: ${props => (props.user ? 'flex-end' : 'initial')};
      max-width: 65%;
      gap: 0.2rem;
      margin-top: ${props => (props.nextUser ? '0.5rem' : '0px')};
      .message-text {
         font-family: 'Open Sans', sans-serif;
         display: inline-block;
         padding: 0.4rem 0.5rem;
         font-weight: 400;
         color: ${props => (props.user ? '#f1f1f1' : props.theme.font)};
         background: ${props =>
            props.user
               ? props.messageColor
                  ? props.messageColor
                  : props.theme.userMessage
               : props.darkMode
               ? props.userColor
               : props.theme.messageBackground};
         transition: background-color 0.2s linear;
         ::selection {
            background-color: ${props =>
               props.darkMode ? 'rgb(34, 34, 34)' : 'rgb(125, 206, 78)'};
         }
      }
      .logged-user {
         border-radius: 1rem;
      }

      .send-time {
         display: none;
         position: absolute;
         z-index: 10;
         ${props => (props.user ? 'left: 0;' : 'right: 0;')}
         top: 0.2rem;
         translate: ${props =>
            props.user ? 'calc(-100% - 5px)' : 'calc(100% + 5px)'};
         font-size: 0.8rem;
         padding: 0.1rem 0.6rem;
         border-radius: 0.4rem;
         background-color: ${props => props.theme.informational};
         white-space: nowrap;
      }
      &:hover {
         .send-time {
            display: flex;
            justify-content: center;
         }
         .options-icon,
         .span-username {
            display: block;
         }
      }
   }

   .message-wrapper {
      border-top-left-radius: ${props => (props.nextUser ? '1rem' : '0')};
      border-top-right-radius: 1rem;
      border-bottom-left-radius: ${props => (props.prevUser ? '1rem' : '0')};
      border-bottom-right-radius: 1rem;
      overflow: hidden;
   }

   .span-username {
      position: absolute;
      display: none;
      font-family: 'Poppins';
      font-size: 0.8rem;
      left: 0;
      top: 0%;
      translate: 0 calc(-100% - 0.2rem);
      z-index: 100;
      color: ${props => props.theme.font};
      border-radius: 0.6rem;
      padding: 0.2rem 0.6rem;
      background-color: ${props => props.theme.informational};
      &:hover {
         display: none;
      }
   }

   .username-wrapper {
      display: flex;
      position: relative;
      min-width: 2rem;
      justify-content: center;
      align-items: center;
      align-self: start;
      transition: all 0.2s linear;
      padding-top: 0.1rem;
      .username {
         display: flex;
         align-items: center;
         font-size: 1rem;
         font-weight: 550;
         color: #fcfcfc;
         justify-content: center;
         text-transform: capitalize;
         width: 1.7rem;
         height: 1.8rem;
         background-color: ${props => `${props.userColor}`};
         border-radius: 0.2rem 0.8rem 0.8rem 0.2rem;
         border: 2px solid #000000;
         user-select: none;
      }
   }

   .options-btn-wrapper {
      align-self: start;
      padding-top: 0.2rem;
   }

   @media only screen and (max-width: 800px) {
      .message-container {
         max-width: 82%;
      }
   }
`;
