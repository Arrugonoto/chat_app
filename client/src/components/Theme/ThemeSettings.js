import { forwardRef, useEffect } from 'react';
import { StyledThemeSettings } from './ThemeSettings.styled';
import { useThemeContext } from '../../context/ThemeContext';
import RoomColorSettings from './RoomColorSettings';
import MessageColorSettings from './MessageColorSettings';

const ThemeSettings = forwardRef((props, ref) => {
   const { displaySettings, setDisplaySettings } = useThemeContext();

   const handleClose = e => {
      if (!ref.current.contains(e.target)) setDisplaySettings(false);
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

         <div>
            <button onPointerUp={() => setDisplaySettings(false)}>
               Close settings
            </button>
            <button>Save</button>
         </div>
      </StyledThemeSettings>
   );
});

export default ThemeSettings;
