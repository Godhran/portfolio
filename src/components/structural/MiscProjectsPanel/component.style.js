import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const button = ({
  className,
  minimalMode,
  children,
  onClick,
  dataToggle,
  ariaExpanded,
  start
}) => (
  <button
    className={`font-bold py-2 px-4 rounded-full max-w-sm ${start?'justify-self-start':'justify-self-end'} ${className}`}
    onClick={onClick}
    data-toggle={dataToggle}
    aria-expanded={ariaExpanded}
  >
    {children}
  </button>
);

export const RoundedButton = styled(button)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.a};
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.light};

  &:hover {
    background-color: ${(props) =>
      props.minimalMode ? colours.minimal.accent : colours.vibrant.a};
    color: ${(props) =>
      props.minimalMode ? colours.minimal.light : colours.vibrant.light};
  }
`;
