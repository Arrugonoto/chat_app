import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
   const [displaySettings, setDisplaySettings] = useState(false);
   const [themeColors, setThemeColors] = useState({
      themeId: 1,
      themeMode: 'dark',
      roomBgId: 1,
      roomBgColor: 'hsl(0, 0%, 18%)',
      messageBgId: 1,
      messageBgColor: '#0c8d71',
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
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};
