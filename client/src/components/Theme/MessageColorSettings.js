import { useState } from 'react';
import { StyledMessageColorSettings } from './MessageColorSettings.styled';
import {
   messageBgColor,
   messageBgGradient,
   fontColor,
} from '../../data/colors';

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
         <h1>Message background</h1>
         <div>
            <h2>Basic</h2>
            <div className="container-btns">
               {messageBgColor.map(el => (
                  <button
                     className={`${
                        el.value ===
                        (themeColors.messageBgColor || theme.userMssage)
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
                        el.id === themeColors.messageBgId
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
                           messageBgId: el.id,
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
               onPointerUp={e =>
                  setThemeColors(prev => ({
                     ...prev,
                     messageBgId: e.target.id,
                     messageBgColor: customColor,
                  }))
               }
            >
               Set color
            </button>
         </div>
         <div>
            <h2>Font color</h2>
            <div className="container-btns btns-font">
               {fontColor.map(el => (
                  <button
                     className={`btn-clr-font ${
                        el.value === themeColors.textColor
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
                           textColor: el.value,
                        }));
                     }}
                  ></button>
               ))}
            </div>
         </div>
      </StyledMessageColorSettings>
   );
};

export default MessageColorSettings;
