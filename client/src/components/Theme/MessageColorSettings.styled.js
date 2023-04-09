import styled from 'styled-components';

export const StyledMessageColorSettings = styled.section.attrs({
   className: 'btn-selected-value, btn-clr-preview, .btn-clr-font, btns-font',
})`
   padding: 1rem 0.8rem;
   display: grid;
   background-color: ${props => props.theme.section};
   border-radius: 0.5rem;

   .container-btns {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
      gap: 0.5rem;
   }

   .btns-font {
      display: flex;
      gap: 1rem;
      padding-top: 0.5rem;
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
      margin-top: 0.6rem;
      border-radius: 0.2rem;
      font-size: 1.2rem;
      letter-spacing: 1px;
      padding: 0;
      transition: all 0.2s linear;
   }

   .btn-clr-font {
      border-radius: 50%;
      padding: 0;
      width: 2rem;
      height: 2rem;
      border: 2px solid rgb(197, 197, 197);
   }

   .btn-selected-value {
      outline-color: rgb(42, 190, 12);
   }
`;
