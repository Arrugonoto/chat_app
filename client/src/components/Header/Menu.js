import { forwardRef, useEffect } from 'react';
import { StyledMenu } from './Header.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

// context
import { useThemeContext } from '../../context/ThemeContext';

const Menu = forwardRef(({ showMenu, setShowMenu, state, menuBtnRef }, ref) => {
   const { setDisplaySettings } = useThemeContext();
   const { logout } = useLogout();

   const handlePointerUp = e => {
      if (
         !ref.current.contains(e.target) &&
         !menuBtnRef.current.contains(e.target)
      ) {
         setShowMenu(false);
      }
   };

   useEffect(() => {
      if (showMenu) {
         window.addEventListener('pointerup', handlePointerUp);
      } else window.removeEventListener('pointerup', handlePointerUp);

      return () => window.removeEventListener('pointerup', handlePointerUp);
      //eslint-disable-next-line
   }, [showMenu, setShowMenu]);

   return (
      <StyledMenu ref={ref} state={state}>
         <ul>
            <li>
               <button
                  title="Change colors"
                  onClick={() => {
                     setDisplaySettings(true);
                     setShowMenu(false);
                  }}
               >
                  <span>
                     <FontAwesomeIcon icon={solid('palette')} />
                  </span>
                  <p>Customize</p>
               </button>
            </li>
            {[...Array(4).keys()].map(i => {
               return (
                  <li key={i}>
                     <button>
                        <span>
                           <FontAwesomeIcon icon={solid('toolbox')} />
                        </span>
                        <p>Placeholder</p>
                     </button>
                  </li>
               );
            })}
            <li>
               <button onPointerUp={logout} title="Logout">
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
