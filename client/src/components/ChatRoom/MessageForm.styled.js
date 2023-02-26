import styled from 'styled-components';

export const MessageFormContainer = styled.div.attrs({
   className: 'btn-cancel-edit',
})`
   display: flex;
   flex-direction: column;
   align-content: center;
   width: 100%;
   padding: 0.6rem 0.6rem 1.2rem 0.6rem;
   gap: 0.6rem;
   button {
      background-color: transparent;
   }
   .btn-cancel-edit {
      align-self: flex-start;
      border: 0.2rem solid hsl(0, 0%, 30%);
      padding: 0.3rem 0.9rem;
      border-radius: 0.4rem;
      margin-left: 0.8rem;
      font-size: 0.9rem;
      font-family: 'Roboto';
      letter-spacing: 0.5px;
      transition: background-color 0.2s linear, scale 0.1s linear;
      &:hover {
         background-color: hsl(0, 0%, 30%);
      }
      &:active {
         scale: 0.96;
      }
   }
`;

export const StyledMessageForm = styled.form`
   display: flex;
   width: 100%;
   align-items: center;
   gap: 0.8rem;

   textarea {
      font-family: 'Roboto flex';
      width: 100%;
      resize: none;
      border-radius: 0.8rem;
      line-height: 1.2;
      border: none;
      padding: 0.3rem 0.6rem;
      font-size: 1rem;
      transition: all 0.2s linear;
      min-height: 2rem;
      outline: none;
      background-color: hsl(0, 0%, 24%);
      &:focus {
         background-color: hsl(0, 0%, 27%);
      }
   }
`;

export const SendMessageBtn = styled.button`
   display: flex;
   font-weight: 600;
   font-size: 1.4rem;
   border-radius: 0.2rem;
   border: none;
   cursor: pointer;
   color: #1db4f6;
   filter: drop-shadow(0px 0px 3px #1db4f6);
   border-radius: 50%;
   &:disabled {
      color: hsl(0, 0%, 24%);
      filter: drop-shadow(0 0);
      cursor: not-allowed;
   }
`;
