"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const GlobalState = createContext({
  state: { overlayOpen: false, scrollY: 0 },
  toggleOverlay: () => {},
  setScrollY: (y: number) => {},
});

export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ overlayOpen: false, scrollY: 0 });

  function toggleOverlay() {
    setState((prevState) => ({
      ...prevState,
      overlayOpen: !prevState.overlayOpen,
    }));
  }
  function setScrollY(y: number) {
    setState((prevState) => ({ ...prevState, scrollY: y }));
  }

  return (
    <GlobalState.Provider value={{ state, toggleOverlay, setScrollY }}>
      {children}
    </GlobalState.Provider>
  );
}

export function useGlobalState() {
  return useContext(GlobalState);
}
