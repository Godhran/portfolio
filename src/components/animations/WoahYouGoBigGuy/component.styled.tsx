import React from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { animated } from "@react-spring/web";
import {
  SVGEllipseProps,
  SVGGroupProps,
  SVGPathProps,
  SVGPolygonProps,
} from "../typings";

const svgEllipse = ({
  className,
  cx,
  cy,
  rx,
  ry,
  transform,
  stroke,
  strokeWidth,
}: SVGEllipseProps) => (
  <animated.ellipse
    className={className}
    strokeWidth={strokeWidth}
    stroke={stroke}
    transform={transform}
    cx={cx}
    cy={cy}
    rx={rx}
    ry={ry}
  />
);

const svgGroup = ({
  className,
  children,
  transform,
  isAnimated,
  onClick,
}: SVGGroupProps) =>
  isAnimated ? (
    <animated.g className={className} transform={transform} onClick={onClick}>
      {children}
    </animated.g>
  ) : (
    <g className={className} transform={transform as string} onClick={onClick}>
      {children}
    </g>
  );

const svgPath = ({ className, d, minimalMode }: SVGPathProps) => (
  <path d={d} className={className} />
);

const svgPolygon = ({ className, points, minimalMode }: SVGPolygonProps) => (
  <polygon points={points} className={className} />
);

export const Text = styled(svgGroup)``;

export const Character = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.b};
`;

export const Head = styled(svgEllipse)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.light};
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.d};
`;

export const Shading = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.c};
`;

export const Hair = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.d};
`;

export const Teeth = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.a};
`;

export const Skin = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;
export const SkinAlt = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;

export const Lines = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const Eyes = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const Main = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.c};
`;

export const Secondary = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.e};
`;

export const Bangle = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.f};
`;
