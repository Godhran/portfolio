import React from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { SVGTextProps } from "../typings";

const svgText = ({ className, x, y, message }: SVGTextProps) => (
  <text x={x} y={y} className={`symbolText ${className}`}>
    {message}
  </text>
);

const svgUse = ({
  symbolTextID,
  minimalMode,
  className,
  first,
  second,
  third,
}: {
  symbolTextID: string;
  className?: string;
  minimalMode?: boolean;
  first?: boolean;
  second?: boolean;
  third?: boolean;
}) => <use xlinkHref={`#${symbolTextID}`} className={className} />;

export const SymbolText = styled(svgText)`
  text-anchor: middle;
  font-family: "Major Mono Display";
  text-transform: lowercase;
  font-size: 9em;
  font-weight: bold;
`;

export const MovingText = styled(svgUse)`
  stroke: ${(props) => {
    if (props.first) {
      return props.minimalMode ? colours.minimal.dark : colours.vibrant.a;
    }

    if (props.second) {
      return props.minimalMode ? colours.minimal.dark : colours.vibrant.b;
    }

    return props.minimalMode ? colours.minimal.dark : colours.vibrant.c;
  }};
  fill: none;
  stroke-dasharray: 15% 30%;
  stroke-width: 4px;
  stroke-linecap: round;
  animation: 5s ease-in-out infinite stroke-offset;

  :nth-of-type(1) {
    stroke-dashoffset: 15%;
  }

  :nth-of-type(2) {
    stroke-dashoffset: 30%;
  }

  :nth-of-type(3) {
    stroke-dashoffset: 45%;
  }

  @keyframes stroke-offset {
    75% {
      stroke-dashoffset: 45%;
      stroke-dasharray: 0 112.5%;
    }
  }
`;
