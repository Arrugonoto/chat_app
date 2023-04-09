import styled from 'styled-components';

export const StyledRoomColorSettings = styled.section.attrs({
   className: 'btn-selected-value, container-btns, btn-clr-preview',
})`
   padding: 1rem 0.8rem;
   display: grid;
   background-color: ${props => props.theme.section};
   border-radius: 0.5rem;
   margin-bottom: 1rem;

   .container-btns {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
      gap: 0.5rem;
   }

   input[type='color'] {
      cursor: pointer;
   }

   button {
      border: none;
      display: inline-block;
      padding: 1.8rem 2.8rem;
      background-repeat: 'no-repeat';
      cursor: pointer;
      transition: all 0.2s linear;
      border-radius: 0.3rem;
      outline: 0.2rem solid transparent;
      outline-offset: 0.1rem;
      &:hover {
         outline-color: rgb(20, 159, 201);
      }
      &:active {
         outline-color: rgb(42, 190, 12);
      }
   }
   .btn-clr-preview {
      width: 100%;
      height: 3rem;
      transition: background-color 0.2s linear, outline 0.2s linear;
      font-size: 1.2rem;
      margin-top: 0.6rem;
      border-radius: 0.2rem;
      padding: 0;
   }
   .btn-selected-value {
      outline-color: rgb(42, 190, 12);
   }
`;
