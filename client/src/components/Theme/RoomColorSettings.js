import { useState } from 'react';
import { StyledRoomColorSettings } from './RoomColorSettings.styled';
import { roomBgColor, roomBgGradient } from '../../data/colors';

const RoomColorSettings = () => {
   const [colorId, setColorId] = useState(1);

   return (
      <StyledRoomColorSettings>
         <h1>Background colors</h1>
         <div>
            <h2>Basic</h2>
            {roomBgColor.map(el => (
               <button
                  className={`${
                     el.id === colorId ? 'btn-selected-value' : null
                  }`}
                  key={el.id}
                  style={{
                     background: `${el.value}`,
                  }}
                  onPointerDown={() => setColorId(el.id)}
               ></button>
            ))}
         </div>
         <div>
            <h2>Gradient</h2>
            {roomBgGradient.map(el => (
               <button
                  className={`${
                     el.id === colorId ? 'btn-selected-value' : null
                  }`}
                  key={el.id}
                  style={{
                     background: `${el.value}`,
                  }}
                  onPointerDown={() => setColorId(el.id)}
               ></button>
            ))}
         </div>
      </StyledRoomColorSettings>
   );
};

export default RoomColorSettings;
