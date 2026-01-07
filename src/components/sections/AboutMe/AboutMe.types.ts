import { SVGIconNames } from "../../ui/iconography/SVGIcon/SVGIcon.type";

type Frameworks = {
  title: string;
  icon: SVGIconNames;
};

export type AboutMeContent = {
  title: string;
  framework: Frameworks[];
};
