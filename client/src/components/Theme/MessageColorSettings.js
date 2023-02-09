import { useState } from 'react';
import { StyledMessageColorSettings } from './MessageColorSettings.styled';
import { messageBgColor, messageBgGradient } from '../../data/colors';

const MessageColorSettings = () => {
   const [colorId, setColorId] = useState(1);

   return (
      <StyledMessageColorSettings>
         <h1>Message colors</h1>
         <div>
            <h2>Basic</h2>
            {messageBgColor.map(el => (
               <button
                  className={`${
                     el.id === colorId ? 'btn-selected-value' : null
                  }`}
                  key={el.id}
                  style={{ background: `${el.value}` }}
                  onPointerDown={() => setColorId(el.id)}
               ></button>
            ))}
         </div>
         <div>
            <h2>Gradient</h2>
            {messageBgGradient.map(el => (
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
            <h2>Custom color</h2>
         </div>
         <div>
            <h2>Text color</h2>
         </div>
      </StyledMessageColorSettings>
   );
};

export default MessageColorSettings;
