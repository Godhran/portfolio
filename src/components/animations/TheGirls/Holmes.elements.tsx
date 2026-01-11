import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const Ear = ({ d, id }: { d: string; id: string }) => {
  const fill = "var(--c-dark)";

  return <path d={d} id={id} fill={fill} />;
};

export const Whisker = ({
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
  const stroke = "var(--c-dark)";
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

export const Outline = ({ d, id }: { d: string; id?: string }) => {
  const stroke = "var(--c-dark)";

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

export const Face = ({ d, id }: { d: string; id?: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-a)" : "var(--c-b)";

  return <path d={d} id={id} fill={fill} />;
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
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-light)";
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} id={id} />;
};

export const Eyebrow = ({ d, id }: { d: string; id?: string }) => {
  const fill = "var(--c-dark)";

  return <path d={d} id={id} fill={fill} />;
};

export const Nose = ({ d, id }: { d: string; id?: string }) => {
  const fill = "var(--c-dark)";

  return <path d={d} id={id} fill={fill} />;
};

export const Mouth = ({ d, id }: { d: string; id?: string }) => {
  const stroke = "var(--c-dark)";

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
  const stroke = "var(--c-dark)";
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
