import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition, faServer } from "@fortawesome/free-solid-svg-icons";

interface SkillIcons {
  [key: string]: string[] | IconDefinition | IconProp; // IFoo is indexable; not a new property
}

export const skillIcons: SkillIcons = {
  html: ["fab", "html5"],
  css: ["fab", "css3"],
  js: ["fab", "js"],
  react: ["fab", "react"],
  node: ["fab", "node"],
  apple: ["fab", "apple"],
  android: ["fab", "android"],
  photoshop: ["fab", "photoshop"],
  illustrator: ["fab", "illustrator"],
  github: ["fab", "github"],
  cloudflare: ["fab", "cloudflare"],
  api: faServer,
};
