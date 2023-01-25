import { useContext, createContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { user: action.payload };
    case ACTIONS.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ type: ACTIONS.LOGIN, payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
