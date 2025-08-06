import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PortfolioState {
  isVibrantMode: boolean;
  toggleVibrant: () => void;
  colours: {
    light: string;
    dark: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
  };
}

const defaultState = {
  isVibrantMode: false,
  colours: {
    light: "#f0f6f0",
    dark: "#222323",
    a: "#f0f6f0",
    b: "#f0f6f0",
    c: "#222323",
    d: "#222323",
    e: "#fcb040",
    f: "#fcb040",
  },
};

const palettes = [
  {
    a: "#ab1f65",
    b: "#ff4f69",
    c: "#ff8142",
    d: "#ffda45",
    e: "#3368dc",
    f: "#49e7ec",
  },
  {
    a: "#900c3f",
    b: "#e84a5f",
    c: "#ff847c",
    d: "#fc9d9d",
    e: "#99b898",
    f: "#feceab",
  },
];

export const usePortfolioStore = create<PortfolioState>()((set) => ({
  ...defaultState,
  toggleVibrant: () =>
    set(({ isVibrantMode }) => {
      const toggledState = !isVibrantMode;
      let nextPalette = defaultState.colours;
      console.log("change it");
      console.log(isVibrantMode, !isVibrantMode);
      if (!toggledState) {
        nextPalette = {
          ...defaultState.colours,
          ...palettes[Math.floor(Math.random() * palettes.length)],
        };
      }

      return { isVibrantMode: !isVibrantMode, colours: nextPalette };
    }),
}));
