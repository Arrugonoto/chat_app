import { useEffect } from 'react';

// components
import { StyledBtnContainer, StyledThemeButton } from './ThemeButton.styled';

// context
import { useThemeContext } from '../../context/ThemeContext';

const ThemeButton = () => {
   const { isDarkTheme, setIsDarkTheme } = useThemeContext();

   const handlePointerUp = () => {
      setIsDarkTheme(prev => !prev);
   };

   useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(isDarkTheme));
      // eslint-disable-next-line
   }, [handlePointerUp]);

   return (
      <StyledBtnContainer>
         <StyledThemeButton onPointerUp={() => handlePointerUp()}>
            Set theme mode
         </StyledThemeButton>
      </StyledBtnContainer>
   );
};

export default ThemeButton;
