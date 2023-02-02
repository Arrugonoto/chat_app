import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   width: 100%;
   min-height: 2.4rem;
   padding: 0.2rem 0.4rem;
   box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
`;

export const MenuContainer = styled.div.attrs({
   className: 'header-username',
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
`;

export const MenuButton = styled.button`
   padding: 0.2rem 0.3rem;
   cursor: pointer;
   background: transparent;
   border: none;
   font-size: 1.8rem;
   color: rgba(255, 255, 255, 0.6);
   transition: all 0.2s linear;
   &:hover {
      color: rgba(255, 255, 255, 0.8);
      filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8));
   }
`;

export const StyledMenu = styled.div`
   display: flex;
   position: absolute;
   justify-content: start;
   z-index: 100;
   right: 0;
   top: 2.3rem;
   background-color: rgb(56, 56, 56);
   padding: 0.4rem 0.3rem;
   border-radius: 0.3rem;
   transition: all 0.2s linear;
   opacity: ${({ state }) =>
      state === 'entering' || state === 'entered' ? 1 : 0};
   scale: ${({ state }) =>
      state === 'entering' || state === 'entered' ? 1 : 0.8};

   ul {
      min-width: 11rem;
      li {
         transition: all 0.2s linear;
         border-radius: 0.5rem;
         &:hover {
            background-color: #424242;
         }
      }
   }

   button {
      width: 100%;
      background-color: transparent;
      display: flex;
      padding: 0.7rem 0.5rem;
      cursor: pointer;
      border: none;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.6);
      transition: all 0.2s linear;
      letter-spacing: 1px;
      gap: 0.5rem;
      &:hover {
         color: rgba(255, 255, 255, 0.8);
         filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.7));
      }
   }
`;
