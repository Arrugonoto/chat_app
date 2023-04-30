import styled from 'styled-components';

export const AnimatedBorder = styled.div`
   display: flex;
   position: relative;
   overflow: hidden;
   width: 24%;
   min-width: 22rem;
   border-radius: 0.4rem;
   transition: all 0.3s linear;
   &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;
      transition: all 0.3s linear;
      background: linear-gradient(
         0deg,
         transparent,
         transparent,
         ${props => (props.error ? '#ff160a' : '#1db4f6')},
         ${props => (props.error ? '#ff160a' : '#1db4f6')}
      );
      transform-origin: bottom right;
      animation: rotate-box 9s linear infinite;
   }
   &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;
      transition: all 0.3s linear;
      background: linear-gradient(
         0deg,
         transparent,
         transparent,
         ${props => (props.error ? '#ff160a' : '#1db4f6')},
         ${props => (props.error ? '#ff160a' : '#1db4f6')}
      );
      transform-origin: bottom right;
      animation: rotate-box 9s linear infinite;
      animation-delay: -4.5s;
   }
`;

export const StyledLoginForm = styled.form.attrs({
   className: 'input-group, err-msg-container',
})`
   position: relative;
   left: 2px;
   top: 2px;
   z-index: 10;
   display: flex;
   flex-direction: column;
   width: calc(100% - 4px);
   height: calc(100% - 4px);
   box-shadow: 0px 0px 1rem 0 rgba(0, 0, 0, 0.1);
   border-radius: 0.4rem;
   padding: 1rem 1.2rem;
   background-color: ${props => props.theme.loginForm};

   h1 {
      text-align: center;
      margin-bottom: 3rem;
   }

   label {
      padding: 0 0 0.1rem 0;
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 0.8rem;
   }

   input {
      width: 100%;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      padding: 0.3rem 0.5rem 0.3rem 0.1rem;
      border: none;
      outline: none;
      background-color: transparent;
      letter-spacing: 1px;
      transition: all 0.2s linear;
   }
   .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0.5rem 0;
      transition: all 0.3s linear;
      &::before {
         position: absolute;
         z-index: 1;
         content: '';
         width: 100%;
         height: 3px;
         bottom: 5%;
         left: 0;
         background-color: ${props => (props.error ? '#ff160a' : '#1db4f6')};
         box-shadow: 0 -1px 0.8rem 0 ${props => (props.error ? '#ff160a' : '#1db4f6')},
            0 -1px 1rem 0 ${props => (props.error ? '#ff160a' : '#1db4f6')};
      }
      div {
         position: relative;
         display: flex;
         width: 100%;
      }
      button {
         position: absolute;
         font-size: 1rem;
         right: 0;
         top: 50%;
         translate: 0 -50%;
         background-color: transparent;
         border: none;
         font-size: 1.4rem;
         cursor: pointer;
         color: ${props => (props.showPassword ? '#1db4f6' : '#bbbbbb')};
         opacity: ${props => (props.showPassword ? '1' : '.7')};
         filter: drop-shadow(
            0 0 0.3rem
               ${props => (props.showPassword ? '#1db4f6' : 'transparent')}
         );
      }
   }
   .err-msg-container {
      width: 100%;
      height: 1.4rem;
   }
`;

export const LoginButton = styled.button`
   padding: 0.5rem 0;
   margin: 2rem 0;
   height: 2.8rem;
   font-weight: 800;
   cursor: pointer;
   background-color: #1d88b6;
   color: #fafafa;
   border: none;
   outline: 2px solid transparent;
   font-size: 1.1rem;
   border-radius: 0.4rem;
   letter-spacing: 1px;
   transition: all 0.3s linear;
   &:hover {
      background-color: #1b6e92;
   }
   &:active {
      outline: 2px solid #fafafa;
   }
`;

export const ErrorMessage = styled.div`
   font-weight: 500;
   color: rgba(252, 13, 13, 1);
   text-align: center;
   letter-spacing: 0.5px;
`;

export const RegisterLink = styled.div`
   padding-top: 1rem;
   font-size: 0.9rem;
   opacity: 0.8;
   transition: all 0.3s linear;
   &:hover {
      opacity: 1;
   }
   p {
      display: flex;
      align-items: center;
   }
   a {
      position: relative;
      text-decoration: none;
      color: #1db4f6;
      transition: all 0.4s linear;
      margin-left: 0.2rem;
      &:hover {
         color: #38e329;
         &::before {
            scale: 1 1;
         }
      }
      &::before {
         content: '';
         position: absolute;
         width: 98%;
         scale: 0 1;
         height: 1px;
         bottom: -2px;
         left: 1%;
         transform-origin: center;
         background-color: #38e329;
         transition: all 0.3s linear;
      }
   }

   @keyframes rotate-box {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
