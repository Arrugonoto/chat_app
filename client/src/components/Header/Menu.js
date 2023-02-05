import { forwardRef } from 'react';
import { StyledMenu } from './Header.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

// context
import { useThemeContext } from '../../context/ThemeContext';

const Menu = forwardRef(({ state }, ref) => {
   const { setDisplaySettings } = useThemeContext();
   const { logout } = useLogout();

   return (
      <StyledMenu ref={ref} state={state}>
         <ul>
            <li>
               <button
                  title="Change colors"
                  onClick={() => setDisplaySettings(true)}
               >
                  <span>
                     <FontAwesomeIcon icon={solid('palette')} />
                  </span>
                  <p>Customize</p>
               </button>
            </li>
            <li>
               <button>
                  <span>
                     <FontAwesomeIcon icon={solid('toolbox')} />
                  </span>
                  <p>Placeholder</p>
               </button>
            </li>
            <li>
               <button onClick={logout} title="Logout">
                  <span>
                     <FontAwesomeIcon
                        icon={solid('arrow-right-from-bracket')}
                     />
                  </span>
                  <p>Logout</p>
               </button>
            </li>
         </ul>
      </StyledMenu>
   );
});

export default Menu;
