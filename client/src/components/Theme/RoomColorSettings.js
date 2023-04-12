import { useState } from 'react';
import { StyledRoomColorSettings } from './RoomColorSettings.styled';
import { roomBgColor, roomBgGradient } from '../../data/colors';

//theme context
import { useThemeContext } from '../../context/ThemeContext';
import { useTheme } from 'styled-components';

const RoomColorSettings = () => {
   const { themeColors, setThemeColors } = useThemeContext();
   const [customColor, setCustomColor] = useState('#12d9e3');
   const theme = useTheme();

   return (
      <StyledRoomColorSettings color={customColor}>
         <h1>Room</h1>
         <div>
            <h2>Basic</h2>
            <div className="container-btns">
               {roomBgColor.map(el => (
                  <button
                     className={`${
                        el.value === (themeColors.roomBgColor || theme.chatRoom)
                           ? 'btn-selected-value'
                           : null
                     }`}
                     key={el.id}
                     style={{
                        background: `${el.value}`,
                     }}
                     onPointerUp={() =>
                        setThemeColors(prev => ({
                           ...prev,
                           roomBgColor: el.value,
                        }))
                     }
                  ></button>
               ))}
            </div>
         </div>
         <div>
            <h2>Gradient</h2>
            <div className="container-btns">
               {roomBgGradient.map(el => (
                  <button
                     className={`${
                        el.value === themeColors.roomBgColor
                           ? 'btn-selected-value'
                           : null
                     }`}
                     key={el.id}
                     style={{
                        background: `${el.value}`,
                     }}
                     onPointerUp={() =>
                        setThemeColors(prev => ({
                           ...prev,
                           roomBgColor: el.value,
                        }))
                     }
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
                  customColor === themeColors.roomBgColor
                     ? 'btn-selected-value'
                     : null
               }`}
               style={{ background: `${customColor}` }}
               onPointerUp={() =>
                  setThemeColors(prev => ({
                     ...prev,
                     roomBgColor: customColor,
                  }))
               }
            >
               Set color
            </button>
         </div>
      </StyledRoomColorSettings>
   );
};

export default RoomColorSettings;
