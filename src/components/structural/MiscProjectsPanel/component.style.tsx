import React, { MouseEventHandler, ReactNode } from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

type ButtonProps = {
  className?: string;
  children: string;
  minimalMode: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  dataToggle: string;
  ariaExpanded: boolean;
  justifyStart?: boolean;
  testId?: string;
};

type PanelProps = {
  className?: string;
  children: ReactNode;
  minimalMode: boolean;
};

const button = ({
  className,
  children,
  onClick,
  dataToggle,
  ariaExpanded,
  justifyStart,
  testId,
}: ButtonProps) => (
  <button
    className={`font-bold font-display lowercase py-2 px-4 rounded-full max-w-sm ${
      justifyStart ? "justify-self-start" : "justify-self-end"
    } ${className}`}
    onClick={onClick}
    data-toggle={dataToggle}
    aria-expanded={ariaExpanded}
    data-testid={testId}
  >
    {children}
  </button>
);

const panel = ({ children, className }: PanelProps) => (
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
