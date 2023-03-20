import styled from 'styled-components';

export const StyledThemeSettings = styled.div.attrs({
   className: 'btns-wraper, btn-close, settings-container',
})`
   display: flex;
   position: absolute;
   right: -100%;
   flex-direction: column;
   background-color: ${props => props.theme.settings};
   height: 100dvh;
   width: 20vw;
   min-width: 20rem;
   padding: 0.6rem 1rem;
   z-index: 11;
   box-shadow: 0 0 1rem 0 rgba(1, 1, 1, 0.4);
   &.show-settings-enter {
      right: -100%;
   }
   &.show-settings-enter-active {
      right: 0;
      transition: all 0.3s;
   }
   &.show-settings-enter-done {
      right: 0;
   }
   &.show-settings-exit {
      right: 0;
   }
   &.show-settings-exit-active {
      right: -100%;
      transition: all 0.8s;
   }
   &.show-settings-exit-done {
      right: -100%;
   }

   h1 {
      font-size: 1.6rem;
      font-weight: 500;
   }

   h2 {
      font-size: 1.3rem;
      margin: 0.8rem 0 0.2rem 0;
      font-weight: 400;
   }

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
   .settings-container {
      overflow-y: scroll;
   }

   .btns-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;
      padding: 1rem 0.1rem;
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
         &:active {
            scale: 0.95;
         }
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
