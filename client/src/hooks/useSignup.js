import { useState } from 'react';

// context
import { ACTIONS, useAuthContext } from '../context/AuthContext';

// hooks
import useRandomColor from './useRandomColor';

// api
import { API_URL, METHODS } from '../services/api';

const useSignup = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const { dispatch } = useAuthContext();
   const { generateColor } = useRandomColor();

   const signUp = async (name, email, password) => {
      setLoading(true);
      setError(null);
      const color = generateColor();

      const response = await fetch(API_URL.REGISTER_USER, {
         method: METHODS.POST,
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, password, color }),
      });

      const result = await response.json();

      if (response.ok) {
         localStorage.setItem('user', JSON.stringify(result));

         dispatch({ type: ACTIONS.LOGIN, payload: result });
      }
      if (!response.ok) {
         setError(result.error);
         console.error(result);
      }
      setLoading(false);
   };

   return { signUp, loading, error, setError };
};

export default useSignup;
