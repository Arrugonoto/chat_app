import { useState } from 'react';
import { ACTIONS, useAuthContext } from '../context/AuthContext';

const LOGIN_URL = 'http://localhost:5000/api/users/login';

const useLogin = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);
   const { dispatch } = useAuthContext();

   const login = async (email, password) => {
      setLoading(true);
      setError(null);

      const response = await fetch(LOGIN_URL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
         localStorage.setItem('user', JSON.stringify(result));

         dispatch({ type: ACTIONS.LOGIN, payload: result });
      } else if (!response.ok) {
         setError(result.error);
      }
      setLoading(false);
   };

   return { login, loading, error, setError };
};

export default useLogin;
