import styled from 'styled-components';

export const StyledThemeSettings = styled.div.attrs({
   className: 'btns-wraper, btn-close',
})`
   display: flex;
   position: absolute;
   right: 0;
   flex-direction: column;
   background-color: rgb(36, 36, 36);
   height: 100vh;
   width: 30vw;
   min-width: 20rem;
   padding: 0.6rem;
   border-radius: 0.8rem 0 0 0.8rem;
   z-index: 11;
   overflow-y: scroll;

   .btn-close {
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
      font-size: 1.5rem;
      padding: 0.1rem 0.5rem;
      border-radius: 2rem;
      color: #000;
      transition: all 0.2s linear;
      background-color: hsl(0, 0%, 70%);
      &:hover {
         background-color: hsl(0, 0%, 90%);
      }
   }

   .btns-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;
      padding: 1rem 0.5rem;
      gap: 1rem;
      button {
         width: 100%;
         padding: 0.6rem 0;
         font-size: 1rem;
         cursor: pointer;
         border-radius: 0.6rem;
         font-family: 'Roboto';
         font-weight: 600;
         letter-spacing: 1px;
         transition: all 0.2s linear;
         &:hover {
            letter-spacing: 2px;
         }
         &:nth-child(1) {
            background-color: hsl(200, 2%, 25%);
            &:hover {
               background-color: hsl(200, 2%, 30%);
            }
         }

         &:nth-child(2) {
            border: 2px solid hsl(115, 77%, 30%);
            background-color: hsl(115, 77%, 30%);
            &:hover {
               background-color: hsl(115, 77%, 35%);
            }
         }
      }
   }
`;
