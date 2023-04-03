import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// global styles
import GlobalStyle from './components/styles/GlobalStyle';

// context
import { useAuthContext } from './context/AuthContext';
import { useThemeContext } from './context/ThemeContext';

// components / styled-components
import { MainContainer } from './components/styles/MainContainer.styled';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatRoom from './pages/ChatRoom';
import { darkTheme, lightTheme } from './components/theme/theme';

// routes
import ROUTES from './routes/routes';

const App = () => {
   const { user } = useAuthContext();
   const { isDarkTheme, themeColors } = useThemeContext();

   return (
      <>
         <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle fontColor={themeColors.textColor} />
            <MainContainer>
               <BrowserRouter>
                  <Routes>
                     <Route
                        path={`${ROUTES.HOME}`}
                        element={
                           user ? (
                              <ChatRoom />
                           ) : (
                              <Navigate to={`${ROUTES.LOGIN}`} />
                           )
                        }
                     />
                     <Route
                        path={`${ROUTES.LOGIN}`}
                        element={
                           !user ? (
                              <Login />
                           ) : (
                              <Navigate to={`${ROUTES.HOME}`} />
                           )
                        }
                     />
                     <Route
                        path={`${ROUTES.SIGNUP}`}
                        element={
                           !user ? (
                              <Signup />
                           ) : (
                              <Navigate to={`${ROUTES.HOME}`} />
                           )
                        }
                     />
                  </Routes>
               </BrowserRouter>
            </MainContainer>
         </ThemeProvider>
      </>
   );
};

export default App;
