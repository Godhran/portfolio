import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { animated } from "@react-spring/web";

const svgEllipse = ({
  className,
  minimalMode,
  cx,
  cy,
  rx,
  ry,
  transform,
  stroke,
  strokeWidth,
}) => (
  <animated.ellipse
    className={className}
    strokeWidth={strokeWidth}
    stroke={stroke}
    transform={transform}
    cx={cx}
    cy={cy}
    rx={rx}
    ry={ry}
  />
);

const svgGroup = ({
  minimalMode,
  className,
  children,
  transform,
  isAnimated,
  onClick,
  fill,
}) =>
  isAnimated ? (
    <animated.g className={className} transform={transform} onClick={onClick}>
      {children}
    </animated.g>
  ) : (
    <g className={className} transform={transform} onClick={onClick}>
      {children}
    </g>
  );

const svgPath = ({ className, d, minimalMode }) => (
  <path d={d} className={className} />
);

const svgPolygon = ({ className, points, minimalMode }) => (
  <polygon points={points} className={className} />
);

export const Text = styled(svgGroup)``;

export const Character = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.f};
`;

export const Head = styled(svgEllipse)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.c};
`;

export const Shading = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const Hair = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.dark};
`;

export const Teeth = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.a};
`;

export const Skin = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.c};
`;
export const SkinAlt = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.c};
`;

export const Lines = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.dark};
`;

export const Eyes = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

export const Main = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.c};
`;

export const Secondary = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.e};
`;

export const Bangle = styled(svgPolygon)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.f};
`;
