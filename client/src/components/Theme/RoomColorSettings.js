import { StyledRoomColorSettings } from './RoomColorSettings.styled';
import { roomBgColor, roomBgGradient } from '../../data/colors';

//theme context
import { useThemeContext } from '../../context/ThemeContext';

const RoomColorSettings = () => {
   const { themeColors, setThemeColors } = useThemeContext();

   return (
      <StyledRoomColorSettings>
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
                     onPointerDown={() =>
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
                     onPointerDown={() =>
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
         </div>
      </StyledRoomColorSettings>
   );
};

export default RoomColorSettings;
