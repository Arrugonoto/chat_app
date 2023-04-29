import { useEffect } from 'react';

const useEventListener = (eventListener, callback) => {
   useEffect(() => {
      window.addEventListener(eventListener, callback);

      return () => window.removeEventListener(eventListener, callback);
      // eslint-disable-next-line
   }, []);
};

export default useEventListener;
