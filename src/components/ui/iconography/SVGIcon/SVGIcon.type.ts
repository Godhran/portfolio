export type SVGIconNames =
  | "nodejs"
  | "unity"
  | "firebase"
  | "mysql"
  | "typescript"
  | "figma"
  | "sketch"
  | "svg"
  | "react"
  | "html"
  | "css"
  | "tailwind"
  | "react native"
  | "illustrator"
  | "photoshop"
  | "lottie"
  | "graphql"
  | "jest"
  | "accessibility"
  | "afterEffects"
  | "godot"
  | "voxels"
  | "aesprite"
  | "blender"
  | "restAPI"
  | "maestro"
  | "detox"
  | "github"
  | "cloudflare"
  | "eye-closed"
  | "eye-open"
  | "skull"
  | "hamburger"
  | "linkedIn"
  | "questionMark";

export type SVGIconProps = {
  icon: SVGIconNames;
  height?: number;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
  hasAction?: boolean;
  fill?: string;
};
