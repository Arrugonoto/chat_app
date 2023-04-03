import { forwardRef } from 'react';
import { StyledMenu } from './Header.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// logout function
import useLogout from '../../hooks/useLogout';

// context
import { useThemeContext } from '../../context/ThemeContext';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';

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

   const handleKeyDown = e => {
      if (e.key === 'Escape') setShowMenu(false);
   };

   useConditionalListener('pointerup', handlePointerUp, showMenu);
   useConditionalListener('keydown', handleKeyDown, showMenu);

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
                           <FontAwesomeIcon icon={solid('gear')} />
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
