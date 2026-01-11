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
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";

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
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-a)" : "var(--c-light)";
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";
  const transformProps = !isRestrictedColourScheme ? transform : undefined;

  return (
    <animated.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill={fill}
      stroke={stroke}
      strokeWidth={10}
      transform={transformProps}
    />
  );
};

export const Shading = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path d={d} fill={fill} />;
};

export const Hair = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path d={d} fill={fill} />;
};

export const Teeth = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-light)" : "var(--c-a)";

  return <path d={d} fill={fill} />;
};

export const Skin = ({ d }: { d: string }) => {
  const fill = "var(--c-light)";

  return <path d={d} fill={fill} />;
};

export const SkinAlt = ({ points }: { points: string }) => {
  const fill = "var(--c-light)";

  return <polygon points={points} fill={fill} />;
};

export const Lines = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  return <path d={d} fill={fill} />;
};

export const Main = ({ d }: { d: string }) => {
  const fill = "var(--c-c)";

  return <path d={d} fill={fill} />;
};

export const Bangle = ({ points }: { points: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-c)" : "var(--c-e)";

  return <polygon points={points} fill={fill} />;
};

export const Secondary = ({ points }: { points: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-light)" : "var(--c-e)";

  return <polygon points={points} fill={fill} />;
};
