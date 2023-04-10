import { forwardRef } from 'react';
import { StyledThemeSettings } from './ThemeSettings.styled';
import RoomColorSettings from './RoomColorSettings';
import MessageColorSettings from './MessageColorSettings';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// context
import { useThemeContext } from '../../context/ThemeContext';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';

const ThemeSettings = forwardRef((props, ref) => {
   const { displaySettings, setDisplaySettings, themeColors, setThemeColors } =
      useThemeContext();

   const handleClose = e => {
      if (!ref.current.contains(e.target)) setDisplaySettings(false);
   };

   const handleKeyDown = e => {
      if (e.key === 'Escape') setDisplaySettings(false);
   };

   const handleResetSettings = () => {
      setThemeColors({
         roomBgColor: '',
         messageBgColor: '',
      });
   };

   useConditionalListener('pointerup', handleClose, displaySettings);
   useConditionalListener('keydown', handleKeyDown, displaySettings);

   return (
      <StyledThemeSettings ref={ref}>
         <button
            className="btn-close"
            onPointerUp={() => setDisplaySettings(false)}
         >
            <FontAwesomeIcon icon={solid('xmark')} title="Close Settings" />
         </button>
         <div className="settings-container">
            <RoomColorSettings />
            <MessageColorSettings />
         </div>

         <div className="btns-wrapper">
            <button onPointerUp={() => handleResetSettings()}>Reset</button>
            <button
               onPointerUp={() =>
                  localStorage.setItem('userTheme', JSON.stringify(themeColors))
               }
            >
               Save changes
            </button>
         </div>
      </StyledThemeSettings>
   );
});

export default ThemeSettings;
