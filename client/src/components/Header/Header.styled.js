import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   width: 100%;
   min-height: 2.9rem;
   padding: 0.2rem 0.4rem;
   background: ${props => props.theme.header};
   z-index: 10;
`;

export const StyledMenuContainer = styled.div.attrs({
   className: 'header-username, header-btns-wrapper',
})`
   display: flex;
   position: relative;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   padding: 0 1rem;
   .header-username {
      font-family: 'Poppins';
      font-size: 0.9rem;
      color: ${props => `${props.userColor}`};
      filter: drop-shadow(0 0 6px ${props => `${props.userColor}`});
      user-select: none;
   }
   .header-btns-wrapper {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      height: 100%;
      padding: 0 0.2rem;
   }
`;

export const StyledMenuButton = styled.button`
   width: 2rem;
   cursor: pointer;
   background: transparent;
   border: none;
   font-size: 1.7rem;
   color: ${props => props.theme.menuBtn};
   transition: all 0.2s linear;
   &:focus {
      outline-color: transparent;
   }
   &:hover {
      color: ${props => props.theme.menuBtnHover};
      filter: drop-shadow(0px 0px 2px ${props => props.theme.menuBtnShadow});
   }
`;

export const StyledMenu = styled.div`
   display: flex;
   position: absolute;
   justify-content: start;
   z-index: 10;
   right: 0;
   top: 2.3rem;
   background-color: ${props => props.theme.menu};
   padding: 0.4rem 0.3rem;
   border-radius: 0.3rem;
   transition: all 0.2s linear;
   box-shadow: 0 0 1rem 0 hsla(0, 0%, 0%, 0.2);
   opacity: ${({ state }) =>
      state === 'entering' || state === 'entered' ? 1 : 0};
   scale: ${({ state }) =>
      state === 'entering' || state === 'entered' ? 1 : 0.8};

   ul {
      min-width: 11rem;
      li {
         transition: all 0.2s linear;
         border-radius: 0.5rem;
         overflow: hidden;
         &:hover {
            background-color: ${props => props.theme.menuListBtnsHover};
         }
      }
      button {
         position: relative;
         width: 100%;
         background-color: transparent;
         display: flex;
         padding: 0.7rem 0.5rem;
         cursor: pointer;
         font-size: 1rem;
         color: ${props => props.theme.menuFont};
         letter-spacing: 1px;
         gap: 0.5rem;
         transition: all 0.2s linear;
         &:hover {
            color: ${props => props.theme.menuFontHover};
            filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.5));
         }
         &::before {
            position: absolute;
            top: 0;
            content: '';
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            background-color: hsla(0, 0%, 100%, 0.2);
            transform-origin: center;
         }
         &:focus::before {
            animation: vanishing-wave 0.35s forwards;
         }
      }
   }
   li:nth-child(1) button {
      background-image: linear-gradient(
         90deg,
         rgba(255, 0, 0, 1) 0%,
         rgba(255, 154, 0, 1) 10%,
         rgba(208, 222, 33, 1) 20%,
         rgba(79, 220, 74, 1) 30%,
         rgba(63, 218, 216, 1) 40%,
         rgba(47, 201, 226, 1) 50%,
         rgba(28, 127, 238, 1) 60%,
         rgba(95, 21, 242, 1) 70%,
         rgba(186, 12, 248, 1) 80%,
         rgba(251, 7, 217, 1) 90%,
         rgba(255, 0, 0, 1) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;

      &:hover {
         filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.2));
         span {
            color: rgba(251, 7, 217, 1);
         }
         p {
            color: transparent;
         }
      }
   }

   @keyframes vanishing-wave {
      0% {
         transform: scaleX(0);
      }
      100% {
         transform: scaleX(1.4);
         opacity: 0;
      }
   }
`;
