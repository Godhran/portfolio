import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

type Props = {
  children: ReactNode;
  minimalMode: boolean;
  className?: string;
  animation: string;
};

const panel = ({ children, className, animation }: Props) => (
  <div
    className={`col flex flex-col justify-content-center p-4 md:rounded ${className}`}
    data-aos={animation}
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
