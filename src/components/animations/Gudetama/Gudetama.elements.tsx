import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { Interpolation, SpringValue, animated } from "@react-spring/web";

export const Shadow = ({
  transform,
}: {
  transform: Interpolation<number, string>;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";

  return (
    <animated.ellipse
      cx={666.72}
      cy={1117.5}
      rx={275}
      ry={50}
      className={"shadow"}
      transform={transform}
      fill={fill}
    />
  );
};

export const Character = ({
  transform,
  onClick,
  children,
}: {
  transform: Interpolation<number, string>;
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <animated.g transform={transform} onClick={onClick} className="gudetama">
      {children}
    </animated.g>
  );
};

export const Yolk = ({ d, highlight }: { d: string; highlight?: boolean }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const style = highlight
    ? {
        fill: "var(--c-light)",
      }
    : {
        stroke: isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)",
        fill: isRestrictedColourScheme ? "var(--c-c)" : "var(--c-c)",
      };

  return (
    <animated.path
      strokeWidth={22}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      className={"cursor-pointer"}
      d={d}
      {...style}
    />
  );
};

export const Shell = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    stroke: isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)",
    fill: "var(--c-light)",
  };

  return (
    <animated.path
      d={d}
      className={"shell"}
      {...style}
      strokeWidth={22}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  );
};

export const FacialFeature = ({
  cx,
  cy,
  rx,
  ry,
  transform,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  transform: string;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-d)";

  return (
    <animated.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      transform={transform}
      className={"cursor-pointer"}
      fill={fill}
    />
  );
};

export const ChopSticks = ({
  transform,
  children,
}: {
  transform: Interpolation<number, string>;
  children?: React.ReactNode;
}) => {
  return (
    <animated.g transform={transform} className="chop-sticks">
      {children}
    </animated.g>
  );
};

export const ChopStick = ({ points }: { points: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  return (
    <animated.polygon points={points} className="chop-sticks" fill={fill} />
  );
};

export const CurvedText = ({
  href,
  startOffset,
  message,
  id,
  duration,
  top,
}: {
  href: string;
  startOffset: number;
  message: string;
  id: string;
  duration: number;
  top?: boolean;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-light)" : "var(--c-c)";
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  const textPathProps = top
    ? {
        textLength: "60%",
        className: `text topTextPathSVG`,
      }
    : {
        textLength: "100%",
        className: `text`,
      };
  const animationProps = top
    ? {
        begin: "0s;topTextPathAnimation.end+5.5s",
      }
    : {
        begin: "topTextPathAnimation.end",
      };

  return (
    <text>
      <textPath
        href={href}
        fontSize={150}
        startOffset={startOffset}
        fill={fill}
        stroke={stroke}
        fontFamily={"Knewave"}
        strokeWidth={10}
        {...textPathProps}
      >
        {message}
        <animate
          id={id}
          attributeName={"startOffset"}
          from="100%"
          to="-100%"
          dur={`${duration}s`}
          {...animationProps}
        />
      </textPath>
    </text>
  );
};

export const Pah = ({
  transform,
  scale,
  opacity,
  message,
}: {
  transform: Interpolation<number, string>;
  scale: SpringValue<number>;
  opacity: SpringValue<number>;
  message: string;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-light)" : "var(--c-c)";
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  return (
    <animated.text
      transform={transform}
      fontFamily={"Knewave"}
      strokeWidth={10}
      className={"select-none"}
      opacity={opacity}
      scale={scale}
      fill={fill}
      stroke={stroke}
      fontSize={150}
      x={550}
      y={550}
    >
      {message}
    </animated.text>
  );
};
