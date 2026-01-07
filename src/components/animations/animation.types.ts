import { Interpolation, SpringValue } from "@react-spring/web";
import { MouseEventHandler, ReactNode } from "react";

export type SVGEllipseProps = {
  className?: string;
  minimalMode?: boolean;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  transform?: Interpolation<number, string> | string;
  stroke?: string;
  strokeWidth?: number;
  isAnimated?: boolean;
};

export type SVGGroupProps = {
  minimalMode?: boolean;
  className?: string;
  children?: ReactNode;
  transform?: Interpolation<number, string> | string;
  isAnimated?: boolean;
  onClick?: MouseEventHandler<SVGGElement>;
  fill?: string;
};

export type SVGPathProps = {
  className?: string;
  d: string;
  offset?:{x:number,y:number}
};
export type SVGPolygonProps = {
  className?: string;
  points: string;
  minimalMode: boolean;
};

export type SVGTextProps = {
  transform?: Interpolation<number, string> | string;
  minimalMode?: boolean;
  x: number | string;
  y: number | string;
  opacity?: number | SpringValue<number>;
  scale?: number | SpringValue<number>;
  fontSize?: number;
  className?: string;
  message: string;
  children?: string | ReactNode;
  textAnchor?: "start" | "end" | "middle" | "inherit" | undefined;
  fontWeight?: number | string;
};

export type SVGCurvedTextProps = {
  className?: string;
  href: string;
  attributeName: string;
  startOffset: number;
  textLength: string;
  fontSize: string;
  from: string;
  to: string;
  dur: string;
  begin: string;
  side: string;
  minimalMode?: boolean;
  message: string;
  id?: string;
};

export type SVGProps = {
  viewBox: string;
  className?: string;
  children: ReactNode;
};
