import styled from 'styled-components';

export const MessagesContainer = styled.div`
   display: flex;
   position: relative;
   flex-direction: column-reverse;
   align-items: flex-start;
   width: 100%;
   height: 100%;
   padding: 1rem 0.3rem;
   overflow-y: scroll;
   scrollbar-width: thin;
   scrollbar-color: rgba(86, 204, 255, 0.1) transparent;
   transition: background-color 0.2s linear;
   background: ${props => `${props.roomColor}`};
`;
export const StyledMessage = styled.article.attrs({
   className:
      'username, username-wrapper, message-text, send-time, message-wrapper, span-username, date-day, options-btn-wrapper, logged-user',
})`
   display: flex;
   position: relative;
   flex-direction: column;
   padding: 0.1rem 0.3rem;
   align-items: flex-start;
   font-family: 'Poppins';
   font-size: 0.9rem;
   width: 100%;

   .date-day {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 3rem 0;
   }

   /* nextUser -> nastepny uzytkownik | prevUser -> poprzedni uzytkownik | user -> zalogowany uzytnowki */
   .message-wrapper {
      position: relative;
      display: flex;
      flex-direction: ${props => (props.user ? 'row-reverse' : 'row')};
      align-items: center;
      justify-content: center;
      align-self: ${props => (props.user ? 'flex-end' : 'initial')};
      max-width: 60%;
      gap: 0.2rem;
      margin-top: ${props => (props.nextUser ? '0.3rem' : '0px')};
      .message-text {
         display: inline-block;
         padding: 0.4rem 0.5rem;
         border-top-left-radius: ${props => (props.nextUser ? '1rem' : '0')};
         border-top-right-radius: 1rem;
         border-bottom-left-radius: ${props => (props.prevUser ? '1rem' : '0')};
         border-bottom-right-radius: 1rem;
         transition: background-color 0.2s linear;
         background: ${props =>
            props.user ? `${props.messageColor}` : `${props.userColor}`};
         ::selection {
            background-color: rgb(34, 34, 34);
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
         background-color: #545454e6;
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

   .span-username {
      position: absolute;
      display: none;
      font-family: 'Poppins';
      font-size: 0.8rem;
      left: 0;
      top: 0%;
      translate: 0 calc(-100% - 0.2rem);
      z-index: 100;
      color: #000;
      border-radius: 0.6rem;
      padding: 0.2rem 0.6rem;
      background-color: #dfdfdfff;
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
`;

export const MsgOptionsBtn = styled.button.attrs({
   className: 'options-icon',
})`
   display: flex;
   width: 1.2rem;
   background-color: transparent;
   border: none;
   font-size: 1.7rem;
   cursor: pointer;
   color: rgba(255, 255, 255, 0.6);
   &:hover {
      color: rgba(255, 255, 255, 0.8);
   }
   &:focus {
      border: none;
      outline: none;
   }
   .options-icon {
      display: none;
   }
`;
