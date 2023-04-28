// context
import { ACTIONS } from '../context/AuthContext';

// api
import { API_URL, METHODS } from '../services/api';

// hooks
import useFetch from './useFetch';

const useLogin = () => {
   const { fetchData, errorMessage, setErrorMessage } = useFetch();

   const login = async (email, password) => {
      const options = {
         method: METHODS.POST,
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      };

      await fetchData(API_URL.LOGIN_USER, options, {
         dispatchAuthType: ACTIONS.LOGIN,
         localStorageKey: 'user',
      });
   };

   return { login, errorMessage, setErrorMessage };
};

export default useLogin;
