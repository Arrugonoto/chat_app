import { forwardRef } from 'react';
import { StyledThemeSettings } from './ThemeSettings.styled';
import { useThemeContext } from '../../context/ThemeContext';

const ThemeSettings = forwardRef(() => {
   const { setDisplaySettings } = useThemeContext();

   return (
      <StyledThemeSettings>
         <section>Background color</section>
         <section>Message BG Color</section>
         <section> Font Color </section>
         <button onClick={() => setDisplaySettings(false)}>
            Close settings
         </button>
      </StyledThemeSettings>
   );
});

export default ThemeSettings;
