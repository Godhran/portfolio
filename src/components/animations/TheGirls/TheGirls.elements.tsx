import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { animated, Interpolation } from "@react-spring/web";

export const Clothes = ({
  d,
  id,
  transform,
}: {
  d: string;
  id?: string;
  transform?: Interpolation<number, string>;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-a)" : "var(--c-b)";

  return (
    <animated.path
      id={id}
      d={d}
      fill={fill}
      {...(transform ? { transform } : {})}
    />
  );
};

export const SpeechBubble = ({ d, id }: { d: string; id: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";
  const fill = "var(--c-light)";

  return <path id={id} d={d} stroke={stroke} fill={fill} strokeWidth={4} />;
};

export const Face = ({
  r,
  cx,
  cy,
  id,
}: {
  r: number;
  cx: number;
  cy: number;
  id: string;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";
  const fill = "var(--c-light)";

  return (
    <circle
      id={id}
      r={r}
      cx={cx}
      cy={cy}
      fill={fill}
      strokeWidth={4}
      stroke={stroke}
    />
  );
};

export const Hair = ({ d, id }: { d: string; id?: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path id={id} d={d} fill={fill} />;
};
export const Eyebrow = ({ d, id }: { d: string; id?: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path id={id} d={d} fill={fill} />;
};

export const SquintingEye = ({ d,id }: { d: string; id?: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";

  return <path id={id} d={d} fill={fill} />;
};

export const Eye = ({
  cx,
  cy,
  rx,
  ry,
  id,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  id?: string;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";

  return <ellipse id={id} cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />;
};

export const Sparkle = ({
  d,
  transform,
}: {
  d: string;
  transform?: Interpolation<string, any>;
}) => {
  const fill = "var(--c-a)";

  return (
    <animated.path d={d} fill={fill} {...(transform ? { transform } : {})} />
  );
};

export const LaptopScreen = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = "var(--c-light)";

  return <path d={d} fill={fill} />;
};

export const LaptopBase = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-dark)";

  return <path d={d} fill={fill} />;
};

export const LaptopOutline = ({ d }: { d: string }) => {
  const fill = "var(--c-dark)";

  return <path d={d} fill={fill} stroke={fill} strokeWidth={1} />;
};

export const LaptopLogo = ({
  cx,
  cy,
  rx,
  ry,
  id,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  id?: string;
}) => {
  const fill = "var(--c-dark)";

  return <ellipse id={id} cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />;
};
