import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const button = ({
  className,
  minimalMode,
  children,
  onClick,
  dataToggle,
  ariaExpanded,
  start,
}) => (
  <button
    className={`font-bold font-display lowercase py-2 px-4 rounded-full max-w-sm ${
      start ? "justify-self-start" : "justify-self-end"
    } ${className}`}
    onClick={onClick}
    data-toggle={dataToggle}
    aria-expanded={ariaExpanded}
  >
    {children}
  </button>
);

const panel = ({ minimalMode, children, className }) => (
  <div
    className={`col flex flex-col justify-content-center p-4 md:rounded ${className}`}
    data-aos="zoom-in"
  >
    {children}
  </div>
);

export const Panel = styled(panel)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;

export const RoundedButton = styled(button)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};

  &:hover {
    background-color: ${(props) =>
      props.minimalMode ? colours.minimal.accent : colours.vibrant.d};
    color: ${(props) =>
      props.minimalMode ? colours.minimal.light : colours.vibrant.light};
  }
`;
