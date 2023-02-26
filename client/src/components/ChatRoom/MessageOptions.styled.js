import styled from 'styled-components';

export const StyledMessageOptions = styled.div`
   display: flex;
   position: absolute;
   flex-direction: column;
   z-index: 20;
   width: 7rem;
   top: calc(-100% - 2rem);
   left: calc(0% - 2rem);
   border-radius: 0.2rem;
   background-color: rgba(83, 83, 83, 0.8);
   overflow: hidden;
   ul {
      padding: 0.3rem 0.3rem;
      width: 100%;
      li {
         width: 100%;
         border-radius: 0.2rem;
         &:hover {
            background-color: hsla(0, 0%, 20%, 0.8);
         }
         &:nth-child(2):hover {
            background-color: #ff160a;
         }
      }
   }
   button {
      width: 100%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      color: #fafafa;
      cursor: pointer;
      font-size: 0.9rem;
      font-family: 'Roboto';
      letter-spacing: 1px;
      padding: 0.4rem 0.8rem;
   }
`;
