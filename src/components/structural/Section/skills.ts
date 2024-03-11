import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition, faServer } from "@fortawesome/free-solid-svg-icons";

interface SkillIcons {
  [key: string]: string[] | IconDefinition | IconProp; // IFoo is indexable; not a new property
}

interface SkillDescriptions {
  [key: string]: string; // IFoo is indexable; not a new property
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

export const skillDescriptions: SkillDescriptions = {
  html: 'HTML 5',
  css: 'CSS',
  js: 'Java Script',
  react: 'React',
  node: 'Node JS',
  apple: 'iOS',
  android: 'Android',
  photoshop: 'Adobe Photoshop',
  illustrator: 'Adobe Illustrator',
  github: 'GitHub',
  cloudflare: 'Cloud Flare',
  api: 'API',
};
