import styled from 'styled-components';

export const StyledChatWindow = styled.div.attrs({
   className:
      'btn-scroll-bottom, btn-show-enter, btn-show-enter-active, btn-show-enter-done, btn-show-exit, btn-show-exit-active, btn-show-exit-done',
})`
   display: flex;
   position: relative;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   width: 100%;
   max-width: 1240px;
   background-color: hsl(0, 0%, 18%);

   .btn-scroll-bottom {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      translate: -50%;
      font-size: 1rem;
      letter-spacing: 0.5px;
      font-family: 'Roboto';
      padding: 0.5rem 1.4rem;
      border-radius: 0.6rem;
      background-color: #464646;
      color: #fafafa;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 200ms linear;
      &:hover {
         background-color: #353535;
         border: 2px solid #616161;
      }
   }
`;

export const StyledHeader = styled.header`
   display: flex;
   width: 100%;
   min-height: 2.4rem;
   padding: 0.2rem 0.4rem;
   box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
`;

export const MenuContainer = styled.div`
   display: flex;
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
