import { useState, useRef } from 'react';
import { StyledHeader, MenuContainer, MenuButton } from './Header.styled';
import Menu from './Menu';
import { Transition } from 'react-transition-group';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// context
import { useAuthContext } from '../../context/AuthContext';

const Header = () => {
   const { user } = useAuthContext();
   const [showMenu, setShowMenu] = useState(false);

   const menuRef = useRef(null);

   return (
      <StyledHeader>
         <MenuContainer userColor={user.color}>
            <p>Hi {user.name} 😊</p>

            <button onClick={() => setShowMenu(prev => !prev)}>
               display menu
            </button>
            <Transition
               nodeRef={menuRef}
               in={showMenu}
               timeout={100}
               unmountOnExit={true}
            >
               <Menu ref={menuRef} />
            </Transition>
         </MenuContainer>
      </StyledHeader>
   );
};

export default Header;
