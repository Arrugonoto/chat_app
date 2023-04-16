import styled from 'styled-components';

export const StyledSignupForm = styled.form.attrs({
   className: 'input-group, err-msg-container, label-wrapper, validation',
})`
   display: flex;
   flex-direction: column;
   width: 20%;
   min-width: 24rem;
   box-shadow: 0px 0px 1rem 0
      ${props => (props.error ? 'rgba(255, 22, 10, 0.5)' : 'transparent')};
   border-radius: 0.4rem;
   padding: 1rem 1.2rem;
   background-color: ${props => props.theme.loginForm};
   transition: box-shadow 0.2s linear;

   h1 {
      text-align: center;
      margin-bottom: 3rem;
   }

   label {
      padding: 0.5rem 0 0.3rem 0;
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
      &::placeholder {
         font-size: 0.9rem;
      }
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
      .label-wrapper {
         display: flex;
         width: 100%;
         justify-content: space-between;
         .validation {
            display: flex;
            position: relative;
            align-items: center;
            border: none;
            color: #bbbbbb;
         }
         span {
            font-size: 1.2rem;
            transition: opacity 0.2s lienar;
            opacity: 0.5;
            &:hover {
               opacity: 1;
            }
         }
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

export const SignupButton = styled.button`
   padding: 0.5rem 0px;
   margin: 2rem 0;
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

export const LoginLink = styled.div`
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
         transition: all 0.25s linear;
      }
   }
`;

export const StyledTooltip = styled.div.attrs({
   className: 'correct, wrong',
})`
   position: absolute;
   display: none;
   top: 50%;
   left: 0;
   translate: calc(-100% - 18px) -50%;
   width: fit-content;
   flex-direction: column;
   background-color: hsl(0, 0%, 18%);
   padding: 0.3rem 0.5rem;
   animation: 0.2s linear flowin;
   border-radius: 0.3rem;
   border: 1px solid hsl(0, 0%, 28%);
   font-size: 0.9rem;
   z-index: 10;
   white-space: nowrap;
   filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
   &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      translate: 100% -50%;
      border-top: 0.5rem solid transparent;
      border-left: 1rem solid #555;
      border-bottom: 0.5rem solid transparent;
   }
   h1 {
      font-size: 0.9rem;
      margin: 0;
      padding: 0;
      text-align: left;
   }
   ul {
      margin-top: 1rem;
      li {
         display: flex;
         gap: 0.3rem;
         padding: 0.3rem 0;
      }
   }

   .wrong {
      color: rgba(252, 13, 13, 1);
   }

   .correct {
      color: #38e329;
   }

   @keyframes flowin {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`;
