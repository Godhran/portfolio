import React from "react";
import { animated, Interpolation } from "@react-spring/web";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const Text = ({
  transform,
  children,
}: {
  transform?: Interpolation<number, string>;
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <animated.g transform={transform}>{children}</animated.g>;
};

export const Character = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.dark : colourScheme.b;
  return <path d={d} fill={fill} />;
};

export const Head = ({
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
  transform?: Interpolation<number, string>;
}) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.a : colourScheme.light;
  const style = isRestrictedColourScheme
    ? { strokeWidth: 10, stroke: colourScheme.dark }
    : { strokeWidth: 10, stroke: colourScheme.d };
  const transformProps = !isRestrictedColourScheme ? transform : undefined;
  return (
    <animated.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill={fill}
      style={style}
      transform={transformProps}
    />
  );
};

export const Shading = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.dark : colourScheme.c;
  return <path d={d} fill={fill} />;
};

export const Hair = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.dark : colourScheme.d;
  return <path d={d} fill={fill} />;
};

export const Teeth = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.light : colourScheme.a;
  return <path d={d} fill={fill} />;
};

export const Skin = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme
    ? colourScheme.light
    : colourScheme.light;
  return <path d={d} fill={fill} />;
};

export const SkinAlt = ({ points }: { points: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme
    ? colourScheme.light
    : colourScheme.light;
  return <polygon points={points} fill={fill} />;
};

export const Lines = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.dark : colourScheme.a;
  return <path d={d} fill={fill} />;
};

export const Main = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.c : colourScheme.c;
  return <path d={d} fill={fill} />;
};

export const Bangle = ({ points }: { points: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.c : colourScheme.e;
  return <polygon points={points} fill={fill} />;
};

export const Secondary = ({ points }: { points: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? colourScheme.light : colourScheme.e;
  return <polygon points={points} fill={fill} />;
};
