import { useState } from 'react';
import { StyledRoomColorSettings } from './RoomColorSettings.styled';
import { roomBgColor, roomBgGradient } from '../../data/colors';

//theme context
import { useThemeContext } from '../../context/ThemeContext';

const RoomColorSettings = () => {
   const { themeColors, setThemeColors } = useThemeContext();
   const [customColor, setCustomColor] = useState('#12d9e3');

   return (
      <StyledRoomColorSettings color={customColor}>
         <h1>Room background</h1>
         <div>
            <h2>Basic</h2>
            <div className="container-btns">
               {roomBgColor.map(el => (
                  <button
                     className={`${
                        el.id === themeColors.roomBgId
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
                           roomBgId: el.id,
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
                        el.id === themeColors.roomBgId
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
                           roomBgId: el.id,
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
                  themeColors.roomBgId == 18 ? 'btn-selected-value' : null
               }`}
               style={{ background: `${customColor}` }}
               id="18"
               onPointerUp={e =>
                  setThemeColors(prev => ({
                     ...prev,
                     roomBgId: e.target.id,
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
