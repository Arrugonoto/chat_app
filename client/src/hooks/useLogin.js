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

      const json = await response.json();

      if (response.ok) {
         localStorage.setItem('user', JSON.stringify(json));

         dispatch({ type: ACTIONS.LOGIN, payload: json });
         setLoading(false);
      }
      if (!response.ok) {
         setLoading(false);
         setError(json.error);
      }
   };

   return { login, loading, error, setError };
};

export default useLogin;
