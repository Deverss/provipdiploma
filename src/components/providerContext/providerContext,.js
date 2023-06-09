import React, { createContext, useState } from "react";

export const ProviderContext = createContext();

export const ProviderContextProvider = ({ children }) => {
  const [provider, setProvider] = useState("");
  return (
    <ProviderContext.Provider value={{ provider, setProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};
