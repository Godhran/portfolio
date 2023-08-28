import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const svgText = ({ className, x, y, message }) => (
  <text x={x} y={y} className={`symbolText ${className}`}>
    {message}
  </text>
);

const svgContainer = ({ viewBox, maxMidth, className, children }) => (
  <svg viewBox={viewBox} className={className}>
    {children}
  </svg>
);

const svgUse = ({
  symbolTextID,
  minimalMode,
  className,
  first,
  second,
  third,
}) => <use xlinkHref={`#${symbolTextID}`} className={className} />;

export const Svg = styled(svgContainer)`
  max-width: ${(props) => props.maxWidth};
`;

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
