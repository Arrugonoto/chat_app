import { StyledRoomColorSettings } from './RoomColorSettings.styled';
import { roomBgColor, roomBgGradient } from '../../data/colors';

const RoomColorSettings = () => {
   return (
      <StyledRoomColorSettings>
         <h1>Background colors</h1>
         <div>
            <h2>Basic</h2>
            {roomBgColor.map(el => (
               <button
                  className="btn-bg-color"
                  key={el.id}
                  style={{ background: `${el.value}` }}
               ></button>
            ))}
         </div>
         <div>
            <h2>Gradient</h2>
            {roomBgGradient.map(el => (
               <button
                  className="btn-bg-gradient"
                  key={el.id}
                  style={{
                     background: `${el.value}`,
                     backgroundRepeat: 'no-repeat',
                  }}
               ></button>
            ))}
         </div>
      </StyledRoomColorSettings>
   );
};

export default RoomColorSettings;
