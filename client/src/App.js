import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

// global styles
import GlobalStyle from './components/styles/GlobalStyle';

// components / styled-components
import { MainContainer } from './components/styles/MainContainer.styled';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatRoom from './pages/ChatRoom';

// routes
import ROUTES from './routes/routes';

const App = () => {
  const { user } = useAuthContext();

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <BrowserRouter>
          <Routes>
            <Route
              path={`${ROUTES.HOME}`}
              element={
                user ? <ChatRoom /> : <Navigate to={`${ROUTES.LOGIN}`} />
              }
            />
            <Route
              path={`${ROUTES.LOGIN}`}
              element={!user ? <Login /> : <Navigate to={`${ROUTES.HOME}`} />}
            />
            <Route
              path={`${ROUTES.SIGNUP}`}
              element={!user ? <Signup /> : <Navigate to={`${ROUTES.HOME}`} />}
            />
          </Routes>
        </BrowserRouter>
      </MainContainer>
    </>
  );
};

export default App;
