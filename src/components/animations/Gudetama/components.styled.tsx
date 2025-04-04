import React from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { animated } from "@react-spring/web";
import {
  SVGCurvedTextProps,
  SVGEllipseProps,
  SVGGroupProps,
  SVGPathProps,
  SVGPolygonProps,
  SVGTextProps,
} from "../typings";

const svgPath = ({ className, d, minimalMode }: SVGPathProps) => (
  <path d={d} className={className} />
);

const svgEllipse = ({
  className,
  transform,
  cx,
  cy,
  rx,
  ry,
  isAnimated,
}: SVGEllipseProps) =>
  isAnimated ? (
    <animated.ellipse
      transform={transform}
      className={className}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
    />
  ) : (
    <ellipse
      transform={transform as string}
      className={className}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
    />
  );

const svgPolygon = ({ className, points, minimalMode }: SVGPolygonProps) => (
  <polygon points={points} className={className} />
);

const svgCurvedText = ({
  className,
  href,
  attributeName,
  startOffset,
  textLength,
  fontSize,
  from,
  to,
  dur,
  begin,
  side,
  minimalMode,
  message,
  id,
}: SVGCurvedTextProps) => (
  <text>
    <textPath
      href={href}
      className={className}
      //@ts-ignore todo:add side to SVGProps<SVGTextPathElement>
      side={side}
      textLength={textLength}
      fontSize={fontSize}
      startOffset={startOffset}
    >
      {message}
      <animate
        id={id}
        attributeName={attributeName}
        from={from}
        to={to}
        dur={dur}
        begin={begin}
      />
    </textPath>
  </text>
);

const svgText = ({
  transform,
  minimalMode,
  x,
  y,
  opacity,
  scale,
  fontSize,
  className,
  message,
}: SVGTextProps) => (
  <animated.text
    transform={transform}
    className={className}
    x={x}
    y={y}
    opacity={opacity}
    scale={scale}
    fontSize={fontSize}
  >
    {message}
  </animated.text>
);

const svgGroup = ({
  minimalMode,
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

export const Character = styled(svgGroup)`
  transform-origin: 0% 50%;
`;

export const ChopSticks = styled(svgGroup)``;

export const Pah = styled(svgText)`
  font-family: "Knewave";
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.d};
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.c};
  stroke-width: 10;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Shadow = styled(svgEllipse)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.b};
`;

export const CurvedText = styled(svgCurvedText)`
  font-family: "Knewave";
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.d};
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  stroke-width: 10;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Yolk = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.c};
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  stroke-width: 21.2598;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  cursor: pointer;
`;

export const Shell = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  stroke-width: 21.2598;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
`;

export const Highlight = styled(svgPath)`
  fill: ${colours.vibrant.light};
  cursor: "pointer";
`;

export const ChopStick = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const FacialFeature = styled(svgEllipse)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.d};
  cursor: pointer;
`;
