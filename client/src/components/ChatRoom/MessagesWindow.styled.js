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
