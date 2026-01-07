import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { Interpolation, SpringValue, animated } from "@react-spring/web";

export const Shadow = ({
  transform,
}: {
  transform: Interpolation<number, string>;
}) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.b,
  };
  return (
    <animated.ellipse
      cx={666.72}
      cy={1117.5}
      rx={275}
      ry={50}
      className={"shadow"}
      transform={transform}
      style={style}
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
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = highlight
    ? {
        fill: colourScheme.light,
      }
    : {
        stroke: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
        fill: isRestrictedColourScheme ? colourScheme.c : colourScheme.c,
      };
  return <animated.path className={"yolk"} d={d} style={style} />;
};

export const Shell = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    stroke: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
    fill: colourScheme.light,
  };
  return <animated.path d={d} className={"shell"} style={style} />;
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
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.d,
  };
  return (
    <animated.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      transform={transform}
      className={"facial-feature"}
      style={style}
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
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
  };
  return (
    <animated.polygon points={points} className="chop-sticks" style={style} />
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
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
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

  const style = {
    fill: isRestrictedColourScheme ? colourScheme.light : colourScheme.c,
    stroke: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
  };

  return (
    <text>
      <textPath
        href={href}
        fontSize={150}
        startOffset={startOffset}
        style={style}
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
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = {
    stroke: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
    fill: isRestrictedColourScheme ? colourScheme.light : colourScheme.c,
  };
  return (
    <animated.text
      transform={transform}
      className={"text"}
      opacity={opacity}
      scale={scale}
      style={style}
      fontSize={150}
      x={550}
      y={550}
    >
      {message}
    </animated.text>
  );
};
