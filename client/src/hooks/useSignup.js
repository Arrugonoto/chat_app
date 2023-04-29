// context
import { ACTIONS } from '../context/AuthContext';

// hooks
import useRandomColor from './useRandomColor';
import useFetch from './useFetch';

// api
import { API_URL, METHODS } from '../services/api';

const useSignup = () => {
   const { generateColor } = useRandomColor();
   const { fetchData, errorMessage, setErrorMessage } = useFetch();

   const signUp = async (name, email, password) => {
      const color = generateColor();
      const options = {
         method: METHODS.POST,
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, password, color }),
      };

      await fetchData(API_URL.REGISTER_USER, options, {
         localStorageKey: 'user',
         dispatchAuthType: ACTIONS.LOGIN,
      });
   };

   return { signUp, errorMessage, setErrorMessage };
};

export default useSignup;
