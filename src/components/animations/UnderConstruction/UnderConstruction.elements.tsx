import React from "react";
import { animated } from "@react-spring/web";
import { SVGPathProps, SVGTextProps } from "../animation.types";

export const WarningBar = ({ d }: SVGPathProps) => {
  return <path d={d} fill={"var(--c-b)"} />;
};

export const Divider = ({ d }: SVGPathProps) => {
  return <path d={d} fill={"var(--c-dark)"} />;
};

export const TickerText = ({
  className,
  transform,
  x,
  y,
  fontSize,
  textAnchor,
  fontWeight,
  message,
}: SVGTextProps) => {
  return (
    <animated.g transform={transform}>
      <text
        x={x}
        y={y}
        fontSize={fontSize}
        textAnchor={textAnchor}
        className={className}
        fontWeight={fontWeight}
        fill={"var(--c-dark)"}
      >
        {message}
      </text>
    </animated.g>
  );
};
