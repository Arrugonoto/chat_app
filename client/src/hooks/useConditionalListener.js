import { useEffect } from 'react';
const useConditionalListener = (eventListener, callback, condition) => {
   useEffect(() => {
      if (condition) {
         window.addEventListener(eventListener, callback);
      } else {
         window.removeEventListener(eventListener, callback);
      }

      return () => window.removeEventListener(eventListener, callback);
      // eslint-disable-next-line
   }, [condition]);
};

export default useConditionalListener;
