import { ColourScheme } from "./colours.types";
export const light = "#f4f4f4";
export const dark = "#1e1832";

export const defaultColourScheme: ColourScheme = {
  light,
  dark,
  a: "#ffcd75",
  b: "#ffcd75",
  c: "#ffcd75",
  d: "#ffcd75",
  e: "#ffcd75",
  f: "#ffcd75",
};

const alternativeScheme: ColourScheme = {
  light,
  dark,
  a: "#b13e53",
  b: "#38b764",
  c: "#ffcd75",
  d: "#257179",
  e: "#b48ead",
  f: "#73eff7",
};

const alternativeScheme2: ColourScheme = {
  light,
  dark,
  a: "#372516",
  b: "#0F4e77",
  c: "#89a377",
  d: "#e7bd8b",
  e: "#fbd271",
  f: "#000",
};
const alternativeScheme3: ColourScheme = {
  light,
  dark,
  a: "#bb8588",
  b: "#d7ce93",
  c: "#d8a48f",
  d: "#efebce",
  e: "#a3aa80",
  f: "#000",
};

export const vibrantColourSchemes: ColourScheme[] = [
  alternativeScheme,
  alternativeScheme2,
  // alternativeScheme3,
];
