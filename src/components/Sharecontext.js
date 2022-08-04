import React, { useContext, useState } from "react";

const Sharecontext = React.createContext();
const SharecontextUpdate = React.createContext();

export function useShare() {
  return useContext(Sharecontext);
}

export function useShareupdate() {
  return useContext(SharecontextUpdate);
}

export function ShareProvider({ children }) {
  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Sharecontext.Provider value={count}>
      <SharecontextUpdate.Provider value={onAdd}>
        {children}
      </SharecontextUpdate.Provider>
    </Sharecontext.Provider>
  );
}
