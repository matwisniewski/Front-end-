import React, { createContext } from "react";

export const GlobalContextValues = {
  creator: "University",
  name: "bakery app",
  theme: "light",
  loading: true,
  token: "",
  secondaryColor: "#FF8C00",
};

const globalStateContext = React.createContext(GlobalContextValues);
export const GlobalStateContextProvider = globalStateContext.Provider;
export default globalStateContext;
