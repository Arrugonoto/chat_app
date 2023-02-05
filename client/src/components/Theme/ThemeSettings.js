import { forwardRef, useEffect } from 'react';
import { StyledThemeSettings } from './ThemeSettings.styled';
import { useThemeContext } from '../../context/ThemeContext';

const ThemeSettings = forwardRef((props, ref) => {
   const { displaySettings, setDisplaySettings } = useThemeContext();

   const handleClose = e => {
      if (!ref.current.contains(e.target)) {
         setDisplaySettings(false);
      }
      console.log('outside');
   };

   useEffect(() => {
      if (displaySettings) {
         window.addEventListener('pointerup', handleClose);
      } else window.removeEventListener('pointerup', handleClose);

      return window.removeEventListener('pointerup', handleClose);

      // eslint-disable-next-line
   }, [displaySettings, setDisplaySettings]);

   return (
      <StyledThemeSettings ref={ref}>
         <section>Background color</section>
         <section>Message BG Color</section>
         <section> Font Color </section>
         <button onPointerUp={() => setDisplaySettings(false)}>
            Close settings
         </button>
      </StyledThemeSettings>
   );
});

export default ThemeSettings;
