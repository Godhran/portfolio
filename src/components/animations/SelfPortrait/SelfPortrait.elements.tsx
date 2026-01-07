import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";

export const Eye = ({
  d,
  offset,
}: {
  d: string;
  offset: { x: number; y: number };
}) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.b,
  };

  return (
    <path
      d={d}
      style={style}
      transform={`translate(${offset.x}, ${offset.y})`}
    />
  );
};

export const EyeMask = ({ d }: { d: string }) => {
  const { colourScheme } = usePortfolioStore();

  return <path d={d} fill={colourScheme.light} />;
};

export const Hair = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.c,
  };

  return <path d={d} style={style} />;
};

export const HairHighlight = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.c,
  };

  return <path d={d} style={style} />;
};

export const Lines = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  const style = {
    fill: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
  };

  return <path d={d} style={style} />;
};

export const LineArt = ({ d }: { d: string }) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  const style = {
    stroke: isRestrictedColourScheme ? colourScheme.dark : colourScheme.a,
  };

  return <path d={d} style={style} className="nose" />;
};
