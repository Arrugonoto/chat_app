import { useState, useRef, useEffect } from 'react';
import {
   StyledHeader,
   StyledMenuContainer,
   StyledMenuButton,
} from './Header.styled';
import Menu from './Menu';
import { Transition } from 'react-transition-group';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// context
import { useAuthContext } from '../../context/AuthContext';
import { useThemeContext } from '../../context/ThemeContext';

const Header = () => {
   const { user } = useAuthContext();
   const { isDarkTheme, setIsDarkTheme } = useThemeContext();
   const [showMenu, setShowMenu] = useState(false);
   const menuRef = useRef(null);
   const menuBtnRef = useRef(null);

   const handlePointerUp = () => {
      setIsDarkTheme(prev => !prev);
   };

   useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(isDarkTheme));
      // eslint-disable-next-line
   }, [handlePointerUp]);

   return (
      <StyledHeader>
         <StyledMenuContainer userColor={user.color}>
            <p className="header-username">Hi {user.name} 😊</p>

            <div className="header-btns-wrapper">
               <button
                  className="btn-toggle-theme"
                  onPointerUp={() => handlePointerUp()}
               >
                  set theme
               </button>
               <StyledMenuButton
                  ref={menuBtnRef}
                  onClick={() => setShowMenu(prev => !prev)}
               >
                  {showMenu ? (
                     <FontAwesomeIcon
                        icon={solid('xmark')}
                        style={{ fontSize: '2.3rem' }}
                        title="Close Menu"
                     />
                  ) : (
                     <FontAwesomeIcon icon={solid('bars')} title="Open Menu" />
                  )}
               </StyledMenuButton>
            </div>

            <Transition
               nodeRef={menuRef}
               in={showMenu}
               timeout={200}
               mountOnEnter={true}
               unmountOnExit={true}
            >
               {state => (
                  <Menu
                     showMenu={showMenu}
                     setShowMenu={setShowMenu}
                     state={state}
                     ref={menuRef}
                     menuBtnRef={menuBtnRef}
                  />
               )}
            </Transition>
         </StyledMenuContainer>
      </StyledHeader>
   );
};

export default Header;
