import React from "react";
import styled from "@emotion/styled";
import { colours } from "./styles/colours";

type Props = {
  minimalMode: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const container = ({ minimalMode, children, className }: Props) => (
  <div className={className}>{children}</div>
);

export const Container = styled(container)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
  text-align: center;
  min-height: 100vh;
  overflow: hidden;
  font-family: "Noto Sans";
`;
