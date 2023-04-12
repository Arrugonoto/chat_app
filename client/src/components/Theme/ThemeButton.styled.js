import styled from 'styled-components';

export const StyledBtnContainer = styled.div`
   display: flex;
   position: relative;

   div {
      display: flex;
      position: absolute;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);
      left: ${props => (props.darkMode ? '3%' : 'calc(89% - 1.6rem)')};
      transition: all 0.5s ease;
      height: 1.6rem;
      width: 1.6rem;
      padding: 14px;
      border: 2px solid
         ${props =>
            props.darkMode ? 'hsl(286, 100%, 28%)' : 'hsl(59, 100%, 65%)'};
      border-radius: 1rem;
      font-size: 1.2rem;
      background-color: ${props =>
         props.darkMode ? 'hsl(0, 0%, 85%)' : 'hsl(0, 0%, 25%)'};
      color: ${props =>
         props.darkMode ? 'hsl(286, 100%, 28%)' : 'hsl(59, 100%, 65%)'};

      box-shadow: 0 0 1rem 0
         ${props =>
            props.darkMode ? 'hsl(286, 100%, 28%)' : 'hsl(59, 100%, 65%)'};

      transition: all 0.5s ease;
   }

   span {
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 0px 1rem #00b3ff);
      cursor: pointer;
      user-select: none;
   }
`;

export const StyledThemeSwitch = styled.input`
   width: 4rem;
   height: 2rem;
   background-color: ${props =>
      props.darkMode ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 10%)'};
   appearance: none;
   -webkit-appearance: none;
   border-radius: 1rem;
   border: 2px solid rgb(99, 99, 99);
   transition: all 0.5s linear;
`;
