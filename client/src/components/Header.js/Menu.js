import { forwardRef } from 'react';
import { StyledMenu, LogoutButton } from './Header.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

const Menu = forwardRef((props, ref) => {
   const { logout } = useLogout();

   return (
      <StyledMenu ref={ref}>
         <ul>
            <li>Customize</li>
            <li>Placeholder</li>
            <li>
               <LogoutButton onClick={logout} title="Logout">
                  <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} />
               </LogoutButton>
            </li>
         </ul>
      </StyledMenu>
   );
});

export default Menu;
