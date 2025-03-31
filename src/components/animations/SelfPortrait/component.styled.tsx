import React from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { SVGPathProps } from "../typings";

const svgPath = ({ className, d, minimalMode, offset }: SVGPathProps) => {
  if (offset) {
    return (
      <path
        d={d}
        className={className}
        transform={`translate(${offset.x}, ${offset.y})`}
      />
    );
  }

  return <path d={d} className={className} />;
};

export const LeftEye = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.b};
`;

export const RightEye = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.b};
`;

export const Hair = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.d};
`;

export const HairHighlight = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.d};
`;

export const Nose = styled(svgPath)`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const Lines = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const EyeMask = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;
