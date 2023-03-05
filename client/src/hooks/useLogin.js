import { useState } from 'react';

// context
import { ACTIONS, useAuthContext } from '../context/AuthContext';

// api
import { API_URL, METHODS } from '../services/api';

const useLogin = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);
   const { dispatch } = useAuthContext();

   const login = async (email, password) => {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL.LOGIN_USER, {
         method: METHODS.POST,
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
         localStorage.setItem('user', JSON.stringify(result));

         dispatch({ type: ACTIONS.LOGIN, payload: result });
      } else if (!response.ok) {
         setError(result.error);
         console.error(result);
      }
      setLoading(false);
   };

   return { login, loading, error, setError };
};

export default useLogin;
