import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
   const [displaySettings, setDisplaySettings] = useState(false);
   const [themeColors, setThemeColors] = useState({
      theme: '',
      roomBgColor: '',
      messageBgColor: '',
      messageTextColor: '',
   });

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
