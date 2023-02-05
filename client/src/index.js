import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context
import { AuthContextProvider } from './context/AuthContext';
import { MessagesContextProvider } from './context/MessagesContext';
import { ModalContextProvider } from './context/ModalContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <AuthContextProvider>
         <ThemeContextProvider>
            <MessagesContextProvider>
               <ModalContextProvider>
                  <App />
               </ModalContextProvider>
            </MessagesContextProvider>
         </ThemeContextProvider>
      </AuthContextProvider>
   </React.StrictMode>
);
