import { ColourScheme } from "../styles/colours.types";

export interface PortfolioState {
  colourScheme: ColourScheme;
  isRestrictedColourScheme: boolean;
  toggleColourScheme: () => void;
  setColourScheme: (scheme: ColourScheme) => void;
  resetColourScheme: () => void;
}
