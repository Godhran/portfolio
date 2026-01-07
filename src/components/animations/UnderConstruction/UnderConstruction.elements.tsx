import React from "react";
import { animated } from "@react-spring/web";
import { SVGPathProps, SVGTextProps } from "../animation.types";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const WarningBar = ({ d }: SVGPathProps) => {
  const { colourScheme } = usePortfolioStore();
  return <path d={d} fill={colourScheme.b} />;
};

export const Divider = ({ d }: SVGPathProps) => {
  const { colourScheme } = usePortfolioStore();
  return <path d={d} fill={colourScheme.dark} />;
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
  const { colourScheme } = usePortfolioStore();
  return (
    <animated.g transform={transform}>
      <text
        x={x}
        y={y}
        fontSize={fontSize}
        textAnchor={textAnchor}
        className={className}
        fontWeight={fontWeight}
        fill={colourScheme.dark}
      >
        {message}
      </text>
    </animated.g>
  );
};
