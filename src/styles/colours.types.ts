export interface ColourScheme {
  light: string;
  dark: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
}

export type ColourToken = keyof ColourScheme;

export const COLOUR_TOKENS = [
  "light",
  "dark",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
] as const satisfies readonly ColourToken[];

export type TailwindProperties = {
  bg: string;
  text: string;
  border: string;
  ring: string;
  fill: string;
  stroke: string;
};
