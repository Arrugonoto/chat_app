import { useState, useEffect } from 'react';

const useFetch = () => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchData = async (url, options) => {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
         ...options,
      });

      const result = await response.json();

      if (response.ok) {
         setData(result);
      } else if (!response.ok) {
         setError(result);
         console.error(result);
      }
      setLoading(false);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return { fetchData, data, loading, error };
};

export default useFetch;
