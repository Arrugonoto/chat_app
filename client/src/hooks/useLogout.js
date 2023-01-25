import { ACTIONS, useAuthContext } from '../context/AuthContext';
import { MSG_ACTIONS, useMessageContext } from '../context/MessagesContext';

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: messageDispatch } = useMessageContext();

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({ type: ACTIONS.LOGOUT });
    messageDispatch({ type: MSG_ACTIONS.SET_MESSAGES, payload: null });
  };

  return { logout };
};

export default useLogout;
