import { useContext, createContext } from "react";
import { useGlobalContextState } from "./useGlobalContextState";

const GlobalSnackbarContext = createContext({});

//hook to consume context
export const useGlobalContext = () => {
  return useContext(GlobalSnackbarContext);
};

//provider
export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalSnackbarContext.Provider value={useGlobalContextState({})}>
      {children}
    </GlobalSnackbarContext.Provider>
  );
};
