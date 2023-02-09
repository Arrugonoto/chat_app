import { StyledMessageColorSettings } from './MessageColorSettings.styled';
import { messageBgColor, messageBgGradient } from '../../data/colors';

// theme context
import { useThemeContext } from '../../context/ThemeContext';

const MessageColorSettings = () => {
   const { themeColors, setThemeColors } = useThemeContext();

   return (
      <StyledMessageColorSettings>
         <h1>Message background</h1>
         <div>
            <h2>Basic</h2>
            {messageBgColor.map(el => (
               <button
                  className={`${
                     el.id === themeColors.messageBgId
                        ? 'btn-selected-value'
                        : null
                  }`}
                  key={el.id}
                  style={{ background: `${el.value}` }}
                  onPointerDown={() =>
                     setThemeColors(prev => ({
                        ...prev,
                        messageBgId: el.id,
                        messageBgColor: el.value,
                     }))
                  }
               ></button>
            ))}
         </div>
         <div>
            <h2>Gradient</h2>
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
