import React, { createContext, useState } from "react";

export const mainMenu = createContext();

const Context = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("New");
  return (
    <mainMenu.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </mainMenu.Provider>
  );
};

export default Context;
