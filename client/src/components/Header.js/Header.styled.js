import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   width: 100%;
   min-height: 2.4rem;
   padding: 0.2rem 0.4rem;
   box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
`;

export const MenuContainer = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   padding: 0 1rem;
   p {
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
   font-size: 1.4rem;
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
   z-index: 100;
   right: 0;
   top: 2.1rem;
   background-color: rgb(56, 56, 56);
`;

export const LogoutButton = styled.button`
   padding: 0.2rem 0.3rem;
   cursor: pointer;
   background: transparent;
   border: none;
   font-size: 1.4rem;
   color: rgba(255, 255, 255, 0.6);
   transition: all 0.2s linear;
   &:hover {
      color: rgba(255, 255, 255, 0.8);
      filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.8));
   }
`;
