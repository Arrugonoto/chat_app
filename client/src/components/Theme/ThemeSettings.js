import { forwardRef, useEffect } from 'react';
import { StyledThemeSettings } from './ThemeSettings.styled';
import RoomColorSettings from './RoomColorSettings';
import MessageColorSettings from './MessageColorSettings';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// context
import { useThemeContext } from '../../context/ThemeContext';

const ThemeSettings = forwardRef((props, ref) => {
   const { displaySettings, setDisplaySettings, themeColors, setThemeColors } =
      useThemeContext();

   const handleClose = e => {
      if (!ref.current.contains(e.target)) setDisplaySettings(false);
   };

   const handleCancelChanges = () => {
      const backupThemeSettings = JSON.parse(localStorage.getItem('userTheme'));
      setThemeColors(backupThemeSettings);
   };

   useEffect(() => {
      if (displaySettings) {
         window.addEventListener('pointerup', handleClose);
      } else window.removeEventListener('pointerup', handleClose);

      return () => window.removeEventListener('pointerup', handleClose);
      // eslint-disable-next-line
   }, [displaySettings, setDisplaySettings]);

   return (
      <StyledThemeSettings ref={ref}>
         <RoomColorSettings />
         <MessageColorSettings />
         <button
            className="btn-close"
            onPointerUp={() => setDisplaySettings(false)}
         >
            <FontAwesomeIcon icon={solid('xmark')} title="Close Settings" />
         </button>

         <div className="btns-wrapper">
            <button onPointerUp={() => handleCancelChanges()}>Reset</button>
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
