import DCODE from "../../../assets/projects/DCODE_FULL.png";
import BOJJI from "../../../assets/projects/BOJJI_FULL.png";
import EMOJO from "../../../assets/projects/EMOJO_FULL.png";
import SISU from "../../../assets/projects/SISU_FULL.png";
import { SVGIconNames } from "../../ui/iconography/SVGIcon/SVGIcon.type";

export type WebApp = {
  image: string;
  title: string;
  description: string;
  url: string;
  skills: SVGIconNames[];
};

export const Apps: WebApp[] = [
  {
    image: BOJJI,
    title: "BOJJI",
    description: "Accessibility flow tool",
    url: "https://bojji.odhran.fun/",
    skills: ["react", "html", "typescript", "css", "github", "cloudflare"],
  },
  {
    image: DCODE,
    title: "DCODE",
    description: "Guess the secret word",
    url: "https://dcode.odhran.fun/",
    skills: [
      "react",
      "html",
      "typescript",
      "css",
      "github",
      "cloudflare",
      "nodejs",
    ],
  },
  {
    image: SISU,
    title: "SISU",
    description: "Stick with something, see it through.",
    url: "https://sisu.odhran.fun/",
    skills: ["react", "html", "typescript", "css", "github", "cloudflare"],
  },
  {
    image: EMOJO,
    title: "eMojo",
    description: "Work out the mystery movie",
    url: "https://emojo.odhran.fun/",
    skills: [
      "react",
      "html",
      "typescript",
      "css",
      "github",
      "cloudflare",
      "nodejs",
    ],
  },
];
