import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const hlavniState:object = {
 currentMenu:"hlavnistranka",
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);
  const setMenu = (stranka: string) => {
    dispatch({
      type: "SET_MENU",
      payload: stranka,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
       currentMenu:state.currentMenu,
       //@ts-ignore
       setMenu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};