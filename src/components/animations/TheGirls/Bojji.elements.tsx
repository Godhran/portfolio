import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const Ear = ({ d }: { d: string }) => {
  const fill = "var(--c-light)";

  return <path d={d} fill={fill} />;
};

export const Whisker = ({ d }: { d: string }) => {
  const fill = "var(--c-light)";
  const stroke = "var(--c-a)";

  return (
    <>
      <path
        d={d}
        stroke={stroke}
        fill={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </>
  );
};

export const Head = ({ d, id }: { d: string; id?: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";

  return <path d={d} id={id} fill={fill} />;
};

export const Eye = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => {
  const fill = "var(--c-a)";
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
};

export const Pupil = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => {
  const fill = "var(--c-dark)";
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
};

export const Nose = ({
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
  const fill = "var(--c-light)";
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} id={id} />;
};

export const Mouth = ({ d, id }: { d: string; id?: string }) => {
  const stroke = "var(--c-light)";

  return (
    <path
      d={d}
      id={id}
      stroke={stroke}
      fill={"none"}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth={2}
    />
  );
};

export const Nasolabial = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => {
  const stroke = "var(--c-light)";
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      fill={"none"}
      strokeMiterlimit={10}
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  );
};

export const Body = ({
  cx,
  cy,
  rx,
  ry,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";
  return (
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} stroke={"none"} />
  );
};
