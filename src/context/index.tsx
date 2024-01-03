import React, { useState, createContext, useContext } from "react";

const initialState = {
  open: false,
  setOpen: (value: boolean) => {},
  showMisc: false,
  toggleShowMisc: () => {},
  minimalMode: false,
  toggleMinimalMode: () => {},
};

type Context = {
  open: boolean;
  setOpen: (value: boolean) => void;
  showMisc: boolean;
  toggleShowMisc: () => void;
  minimalMode: boolean;
  toggleMinimalMode: () => void;
};

type Provider = {
  children: JSX.Element | JSX.Element[];
};

const PortfolioContext = createContext<Context>(initialState);

export const usePortfolioContext = () => useContext(PortfolioContext);

export function PortfolioProvider({ children }: Provider) {
  const [open, setOpen] = useState(false);
  const [showMisc, setShowMisc] = useState(false);
  const [minimalMode, setMinimalMode] = useState(true);

  const toggleMinimalMode = () => {
    setMinimalMode(!minimalMode);
  };

  const toggleShowMisc = () => {
    setShowMisc(!showMisc);
  };

  const exports = {
    open,
    setOpen,
    showMisc,
    toggleShowMisc,
    minimalMode,
    toggleMinimalMode,
  };

  return (
    <PortfolioContext.Provider value={exports}>
      {children}
    </PortfolioContext.Provider>
  );
}
