import styled from 'styled-components';

export const StyledDeleteModal = styled.div`
   display: flex;
   position: absolute;
   align-items: center;
   justify-content: center;
   z-index: 1;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.4);

   article {
      display: flex;
      position: relative;
      flex-direction: column;
      background-color: ${props => props.theme.modal};
      width: 20%;
      min-width: 24rem;
      padding: 1rem 1.2rem;
      border-radius: 0.4rem;
      gap: 1rem;
      animation: 0.2s linear flowin;
      h1 {
         font-size: 1.5rem;
      }
      div {
         margin-top: 1rem;
         display: flex;
         justify-content: center;
         gap: 1rem;
         padding: 1rem 0;
      }
      button {
         display: flex;
         align-items: center;
         color: #fcfcfc;
         gap: 0.3rem;
         padding: 0.8rem 1.2rem;
         letter-spacing: 1px;
         font-size: 0.9rem;
         font-weight: 600;
         font-family: 'Roboto';
         background-color: transparent;
         border: none;
         border-radius: 0.5rem;
         cursor: pointer;
         transition: all 0.2s linear;
         &:focus {
            outline: 3px solid #fafafa;
         }
         &:nth-child(1) {
            background-color: #4b4b4b;
            border: 2px solid hsl(115, 77%, 30%);
            &:hover {
               background-color: hsl(115, 77%, 30%);
            }
         }
         &:nth-child(2) {
            background-color: #be1209;
            &:hover {
               background-color: hsl(3, 90%, 50%);
            }
         }
      }
      span {
         color: #ff160a;
         font-weight: 600;
      }
   }

   @keyframes flowin {
      0% {
         opacity: 0;
         scale: 0.8;
      }
      100% {
         opacity: 1;
         scale: 1;
      }
   }
`;
