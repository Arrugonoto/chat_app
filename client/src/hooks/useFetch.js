import { useState } from 'react';
// eslint-disable-next-line
import { useMessageContext } from '../context/MessagesContext';
import { useAuthContext } from '../context/AuthContext';

const useFetch = () => {
   const { dispatch } = useMessageContext();
   const { dispatch: dispatchAuth } = useAuthContext();
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   // eslint-disable-next-line
   const fetchData = async (
      url,
      options,
      {
         dispatchMsgType = undefined,
         dispatchAuthType = undefined,
         localStorageKey = undefined,
         onSuccess = undefined,
      }
   ) => {
      setLoading(true);
      setErrorMessage(null);

      const response = await fetch(url, {
         ...options,
      });

      const result = await response.json();

      if (response.ok) {
         setData(result);
         if (localStorageKey) {
            localStorage.setItem(localStorageKey, JSON.stringify(result));
         }
         if (dispatchAuthType) {
            dispatchAuth({ type: dispatchAuthType, payload: result });
         }
         if (dispatchMsgType) {
            dispatch({
               type: dispatchMsgType,
               payload: result,
            });
         }
         if (onSuccess) {
            onSuccess();
         }
      } else if (!response.ok) {
         setErrorMessage(result.error);
         console.error(result);
      }
      setLoading(false);
   };

   return { fetchData, data, loading, errorMessage, setErrorMessage };
};

export default useFetch;
