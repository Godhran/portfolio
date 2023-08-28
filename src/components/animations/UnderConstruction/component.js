import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { animated } from "@react-spring/web";

const svgPath = ({ d, minimalMode, className }) => (
  <path d={d} className={className} />
);

const svgAnimatedText = ({
  minimalMode,
  className,
  transform,
  x,
  y,
  fontSize,
  textAnchor,
  fontWeight,
  message,
}) => (
  <animated.g transform={transform}>
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      textAnchor={textAnchor}
      className={className}
      fontWeight={fontWeight}
    >
      {message}
    </text>
  </animated.g>
);

export const WarningBar = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.d};
`;

export const Divider = styled(svgPath)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;

export const TickerText = styled(svgAnimatedText)`
  fill: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.c};
`;