import styled from 'styled-components';

export const MainContainer = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100dvh;
   background-color: ${props => props.theme.main};
   transition: background-color 0.2s linear;
`;
