import { StyledHeader, LogoutButton, MenuContainer } from './ChatWindow.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

// context
import { useAuthContext } from '../../context/AuthContext';

const Header = () => {
   const { user } = useAuthContext();
   const { logout } = useLogout();

   return (
      <StyledHeader>
         <MenuContainer userColor={user.color}>
            <p>Hi {user.name} 😊</p>
            <LogoutButton onClick={logout} title="Logout">
               <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} />
            </LogoutButton>
         </MenuContainer>
      </StyledHeader>
   );
};

export default Header;
