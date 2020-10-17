import React, { createContext } from "react";

export const GlobalContextValues = {
  creator: "University",
  name: "bakery app",
  theme: "light",
  loading: true,
  token: "",
};

const globalStateContext = React.createContext(GlobalContextValues);
export const GlobalStateContextProvider = globalStateContext.Provider;
export default globalStateContext;
