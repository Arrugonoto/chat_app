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
   background: ${props =>
      props.roomColor ? props.roomColor : props.theme.chatRoom};
   transition: background-color 0.2s linear;
   .btn-scroll-bottom {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      translate: -50%;
      font-size: 1rem;
      letter-spacing: 0.5px;
      font-family: 'Roboto';
      padding: 0.5rem 1.4rem;
      border-radius: 0.5rem;
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
