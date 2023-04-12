import { useState } from 'react';
import { StyledMessageColorSettings } from './MessageColorSettings.styled';
import { messageBgColor, messageBgGradient } from '../../data/colors';

// theme context
import { useThemeContext } from '../../context/ThemeContext';
// theme -> styled-components
import { useTheme } from 'styled-components';

const MessageColorSettings = () => {
   const { themeColors, setThemeColors } = useThemeContext();
   const [customColor, setCustomColor] = useState('#9a1dd4');
   const theme = useTheme();

   return (
      <StyledMessageColorSettings>
         <h1>Message</h1>
         <div>
            <h2>Basic</h2>
            <div className="container-btns">
               {messageBgColor.map(el => (
                  <button
                     className={`${
                        el.value ===
                        (themeColors.messageBgColor || theme.userMessage)
                           ? 'btn-selected-value'
                           : null
                     }`}
                     key={el.id}
                     style={{ background: `${el.value}` }}
                     onPointerDown={() =>
                        setThemeColors(prev => ({
                           ...prev,
                           messageBgColor: el.value,
                        }))
                     }
                  ></button>
               ))}
            </div>
         </div>
         <div>
            <h2>Gradient</h2>
            <div className="container-btns">
               {messageBgGradient.map(el => (
                  <button
                     className={`${
                        el.value === themeColors.messageBgColor
                           ? 'btn-selected-value'
                           : null
                     }`}
                     key={el.id}
                     style={{
                        background: `${el.value}`,
                     }}
                     onPointerDown={() => {
                        setThemeColors(prev => ({
                           ...prev,
                           messageBgColor: el.value,
                        }));
                     }}
                  ></button>
               ))}
            </div>
         </div>
         <div>
            <h2>Custom color</h2>
            <input
               type="color"
               id="bg-color"
               name="bg-color"
               value={customColor}
               onChange={e => setCustomColor(e.target.value)}
            ></input>
            <button
               className={`btn-clr-preview ${
                  customColor === themeColors.messageBgColor
                     ? 'btn-selected-value'
                     : null
               }`}
               style={{
                  background: `${customColor}`,
                  color: `${themeColors.textColor}`,
               }}
               onPointerUp={() =>
                  setThemeColors(prev => ({
                     ...prev,
                     messageBgColor: customColor,
                  }))
               }
            >
               Set color
            </button>
         </div>
      </StyledMessageColorSettings>
   );
};

export default MessageColorSettings;
