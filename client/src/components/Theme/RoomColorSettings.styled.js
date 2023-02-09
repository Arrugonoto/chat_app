import styled from 'styled-components';

export const StyledRoomColorSettings = styled.section.attrs({
   className: 'btn-selected-value',
})`
   padding: 0.5rem;
   display: grid;
   button {
      border: none;
      display: inline-block;
      padding: 1.8rem 2.8rem;
      background-repeat: 'no-repeat';
      cursor: pointer;
      transition: all 0.2s linear;
      border-radius: 0.3rem;
      outline: 0.2rem solid
         ${props => (props.selectedValue ? 'rgb(42, 190, 12)' : 'transparent')};
      &:hover {
         outline-color: rgb(20, 159, 201);
      }
      &:active {
         outline-color: rgb(42, 190, 12);
      }
   }
   .btn-selected-value {
      outline-color: rgb(42, 190, 12);
   }
`;
