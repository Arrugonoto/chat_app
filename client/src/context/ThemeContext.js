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
      messageTextColor: '#e9e9e9',
   });

   useEffect(() => {
      const userTheme = JSON.parse(localStorage.getItem('userTheme'));

      if (userTheme) {
         setThemeColors({
            themeId: userTheme.themeId,
            themeMode: userTheme.themeMode,
            roomBgId: userTheme.roomBgId,
            roomBgColor: userTheme.roomBgColor,
            messageBgId: userTheme.messageBgId,
            messageBgColor: userTheme.messageBgColor,
            messageTextColor: userTheme.messageTextColor,
         });
      }
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
