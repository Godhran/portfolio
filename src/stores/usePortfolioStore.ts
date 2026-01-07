import { create } from "zustand";
import { PortfolioState } from "./usePortfolioStore.types";
import {
  defaultColourScheme,
  vibrantColourSchemes,
} from "../styles/colours.constants";
import { ColourScheme } from "../styles/colours.types";

export const usePortfolioStore = create<PortfolioState>((set) => ({
  colourScheme: defaultColourScheme,
  isRestrictedColourScheme: true,
  setColourScheme: (scheme: ColourScheme) =>
    set(() => ({
      colourScheme: scheme,
    })),
  toggleColourScheme: () =>
    set(({ isRestrictedColourScheme }) => {
      if (!isRestrictedColourScheme) {
        return {
          isRestrictedColourScheme: true,
          colourScheme: defaultColourScheme,
        };
      }

      const colourScheme =
        vibrantColourSchemes[
          Math.floor(Math.random() * vibrantColourSchemes.length)
        ];

      return {
        colourScheme,
        isRestrictedColourScheme: false,
      };
    }),
  resetColourScheme: () =>
    set({
      colourScheme: defaultColourScheme,
    }),
}));
