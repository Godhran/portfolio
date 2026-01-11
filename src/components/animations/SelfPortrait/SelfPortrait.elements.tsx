import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const Eye = ({
  d,
  offset,
}: {
  d: string;
  offset: { x: number; y: number };
}) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";
  return (
    <path d={d} fill={fill} transform={`translate(${offset.x}, ${offset.y})`} />
  );
};

export const EyeMask = ({ d }: { d: string }) => {
  return <path d={d} fill={"var(--c-light)"} />;
};

export const Hair = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path d={d} fill={fill} />;
};

export const HairHighlight = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-c)";

  return <path d={d} fill={fill} />;
};

export const Lines = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const fill = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  return <path d={d} fill={fill} />;
};

export const LineArt = ({ d }: { d: string }) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const stroke = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-a)";

  return (
    <path
      d={d}
      stroke={stroke}
      fill="none"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  );
};
