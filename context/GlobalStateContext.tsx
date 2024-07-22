"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const GlobalState = createContext({
  state: { overlayOpen: false },
  toggleOverlay: () => {},
});

export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ overlayOpen: false });

  function toggleOverlay() {
    setState((prevState) => ({
      ...prevState,
      overlayOpen: !prevState.overlayOpen,
    }));
  }

  return (
    <GlobalState.Provider value={{ state, toggleOverlay }}>
      {children}
    </GlobalState.Provider>
  );
}

export function useGlobalState() {
  return useContext(GlobalState);
}
