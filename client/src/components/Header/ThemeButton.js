// context
import { useThemeContext } from '../../context/ThemeContext';

const ThemeButton = () => {
   const { setIsDarkTheme } = useThemeContext();

   return <div>ThemeButton</div>;
};

export default ThemeButton;
