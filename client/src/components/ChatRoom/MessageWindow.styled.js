import styled from 'styled-components';

export const MessagesContainer = styled.div`
   display: flex;
   position: relative;
   flex-direction: column-reverse;
   align-items: flex-start;
   width: 100%;
   height: 100%;
   padding: 0.2rem 0.3rem;
   overflow-y: scroll;
   scrollbar-width: thin;
   scrollbar-color: rgba(86, 204, 255, 0.1) transparent;
`;
export const StyledMessage = styled.article.attrs({
   className:
      'username, username-wrapper, message-text, send-time, message-wrapper, span-username, date-day',
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

   .message-wrapper {
      position: relative;
      display: flex;
      flex-direction: ${props => (props.user ? 'row-reverse' : 'row')};
      align-items: center;
      justify-content: center;
      align-self: ${props => (props.user ? 'flex-end' : 'initial')};
      max-width: 65%;
      gap: 0.2rem;
      margin-top: ${props => (props.anotherUser ? '0.3rem' : '0px')};

      .message-text {
         padding: 0.4rem 0.5rem;
         border-radius: 1rem;
         word-break: break-all;
         background-color: ${props =>
            props.user ? '#0c8d71' : `${props.userColor}`};
         ::selection {
            background-color: rgb(34, 34, 34);
         }
      }
      .send-time {
         display: none;
         position: absolute;
         z-index: 10;
         ${props => (props.user ? 'left: 0;' : 'right: 0;')}
         top: 50%;
         translate: ${props =>
            props.user ? 'calc(-100% - 5px) -50%' : 'calc(100% + 5px) -50%'};
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
      width: 1.8rem;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: all 0.2s linear;

      .username {
         display: flex;
         align-items: center;
         font-size: 1rem;
         font-weight: 550;
         justify-content: center;
         text-transform: capitalize;
         width: 1.7rem;
         height: 1.7rem;
         background-color: ${props => `${props.userColor}`};
         border-radius: 0.2rem 0.8rem 0.8rem 0.2rem;
         border: 2px solid #ffffff;
         user-select: none;
      }
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
