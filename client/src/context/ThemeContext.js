import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
   const [displaySettings, setDisplaySettings] = useState(false);
   const [isDarkTheme, setIsDarkTheme] = useState(true);
   const [themeColors, setThemeColors] = useState({
      roomBgId: 1,
      roomBgColor: '',
      messageBgId: 1,
      messageBgColor: '',
      textColor: '#e9e9e9',
   });

   useEffect(() => {
      const userTheme = JSON.parse(localStorage.getItem('userTheme'));

      if (userTheme) {
         setThemeColors({
            ...userTheme,
         });
      } else {
         localStorage.setItem('userTheme', JSON.stringify(themeColors));
      }
      // eslint-disable-next-line
   }, []);

   return (
      <ThemeContext.Provider
         value={{
            displaySettings,
            setDisplaySettings,
            themeColors,
            setThemeColors,
            isDarkTheme,
            setIsDarkTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};
