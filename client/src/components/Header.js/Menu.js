import { forwardRef } from 'react';
import { StyledMenu } from './Header.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

const Menu = ({ state }) => {
   const { logout } = useLogout();

   return (
      <StyledMenu state={state}>
         <ul>
            <li>
               <button title="Change colors">
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
};

export default Menu;
