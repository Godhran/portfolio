import { ColourScheme } from "./colours.types";
export const light = "#f4f4f4";
export const dark = "#1e1832";

export const defaultColourScheme: ColourScheme = {
  light,
  dark,
  a: "#ffcd75",
  b: dark,
  c: "#ffcd75",
  d: "#ffcd75",
  e: "#ffcd75",
  f: "#ffcd75",
};

const RaginBeige: ColourScheme = {
  light:'#fff5d7',
  dark:'#2f1728',
  a: "#ac9f40",
  b: "#feb300",
  c: "#ff5e6c",
  d: "#ffaaab",
  e: "#f5b539",
  f: "#f5b539",
};

const GreenTreeline: ColourScheme = {
  light:'#fff5d7',
  dark:'#000624',
  a: "#478559",
  b: "#f95d9b",
  c: "#b1af58",
  d: "#39a0ca",
  e: "#b1af58",
  f: "#f5b539",
}

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

const gameBoyScheme: ColourScheme = {
light:"#eeffcc",
dark:"#112318",
a:"#1e3a29",
b:"#305d42",
c:"#4d8061",
d:"#89a257",
e:"#bedc7f",
f:"#eeffcc"
}

// const gameboyScheme2: ColourScheme = {
// light,
// dark,
// a:"#39809c",
// b:"#28375b",
// c:"#5fcc86  ",
// d:"#fff37b",
// e:"#fff37b",
// f:"#fff37b"
// };

const altScheme: ColourScheme = {
  light:"#2f2f4b",
  dark:"#ede1c7",
  a:"#d17f74",
  b:"#d8b887",
  c:"#d17f74",
  d:"#d8b887",
  e:"#ede1c7",
  f:"#ede1c7",
}

const googleScheme: ColourScheme = {
  light,
  dark,
  b:"#d74430",
  a:"#000000",
  d:"#ffbb05",
  c:"#049956",
  f:"#176eee",
  e:"#ffffff",
}

export const vibrantColourSchemes: ColourScheme[] = [
  RaginBeige,
  GreenTreeline,
  // googleScheme,
  alternativeScheme,
  // alternativeScheme2,
  gameBoyScheme,
  // alternativeScheme3,
  altScheme
];
