import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('Home');

  const value = {
    currentPage,
    setCurrentPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}