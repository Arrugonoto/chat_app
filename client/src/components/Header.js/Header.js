import { useState, useRef } from 'react';
import { StyledHeader, MenuContainer, MenuButton } from './Header.styled';
import Menu from './Menu';
import { Transition } from 'react-transition-group';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// context
import { useAuthContext } from '../../context/AuthContext';

// transition styles
const fadeTransition = {
   entering: { oapcity: 1, transform: 'scale(1.05) translateY(-4rem)' },
   entered: { opacity: 1, transform: 'scale(1.03) translateY(-4rem)' },
   exiting: { opacity: 0, transform: 'scale(0.8)' },
   exited: { opacity: 0, transform: 'scale(0.8)' },
};

const Header = () => {
   const { user } = useAuthContext();
   const [showMenu, setShowMenu] = useState(false);

   return (
      <StyledHeader>
         <MenuContainer userColor={user.color}>
            <p className="header-username">Hi {user.name} 😊</p>

            <MenuButton onClick={() => setShowMenu(prev => !prev)} title="Menu">
               <FontAwesomeIcon icon={solid('bars')} />
            </MenuButton>
            <Transition
               in={showMenu}
               timeout={200}
               mountOnEnter={true}
               unmountOnExit={true}
            >
               {state => <Menu state={state} />}
            </Transition>
         </MenuContainer>
      </StyledHeader>
   );
};

export default Header;
