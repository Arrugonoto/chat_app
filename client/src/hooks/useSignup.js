import { useState } from 'react';
import { ACTIONS, useAuthContext } from '../context/AuthContext';
import useRandomColor from './useRandomColor';

const SIGNUP_URL = 'http://localhost:5000/api/users/signup';

const useSignup = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);
   const { dispatch } = useAuthContext();
   const { generateColor } = useRandomColor();

   const signUp = async (name, email, password) => {
      setLoading(true);
      setError(null);
      const color = generateColor();

      const response = await fetch(SIGNUP_URL, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, password, color }),
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

   return { signUp, loading, error, setError };
};

export default useSignup;
