// components
import { StyledBtnContainer, StyledThemeSwitch } from './ThemeButton.styled';

// context
import { useThemeContext } from '../../context/ThemeContext';

const ThemeButton = () => {
   const { isDarkTheme, setIsDarkTheme } = useThemeContext();

   const handlePointerUp = () => {
      setIsDarkTheme(prev => !prev);
      localStorage.setItem('darkMode', JSON.stringify(!isDarkTheme));
   };

   return (
      <StyledBtnContainer>
         <StyledThemeSwitch
            type="checkbox"
            onPointerUp={() => handlePointerUp()}
         ></StyledThemeSwitch>
      </StyledBtnContainer>
   );
};

export default ThemeButton;
