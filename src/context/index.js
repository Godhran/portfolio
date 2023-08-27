// in notification-context.js
import React, { useState, createContext, useContext } from "react";

// ... Our notification component

const PortfolioContext = createContext();

export const usePortfolioContext = () => useContext(PortfolioContext);

export function PortfolioProvider({ children }) {
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
