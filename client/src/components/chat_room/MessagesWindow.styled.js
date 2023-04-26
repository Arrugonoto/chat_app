import styled from 'styled-components';

export const MessagesContainer = styled.div.attrs({
   className: 'messages-wrapper, scrollbar-container',
})`
   display: flex;
   position: relative;
   width: 100%;
   height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
   scrollbar-width: thin;
   scrollbar-color: rgba(86, 204, 255, 0.1) transparent;
   transition: background-color 0.2s linear;

   .scrollbar-container {
      width: 100%;
   }

   .messages-wrapper {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      width: 100%;
      padding: 1rem 0.3rem 2rem 0.3rem;
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
   color: ${props => props.theme.messageBtn};
   &:hover {
      color: ${props => props.theme.messageBtnHover};
   }
   &:focus {
      border: none;
      outline: none;
   }
   .options-icon {
      display: none;
   }
`;
