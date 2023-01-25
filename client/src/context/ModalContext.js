import { useContext, createContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};
