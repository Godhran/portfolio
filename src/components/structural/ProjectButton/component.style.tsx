import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { colours } from "../../../styles/colours";

type Props = {
  className?: string;
  children: ReactNode;
  minimalMode: boolean;
};

const wrapper = ({ className, children }: Props) => (
  <div
    className={`mx-auto max-w rounded overflow-hidden shadow-lg p-4 h-full drop-shadow-md bg-white m-3 flex flex-col justify-between ${className}`}
  >
    {children}
  </div>
);

export const Wrapper = styled(wrapper)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

const title = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
);

export const Title = styled(title)`
  fontfamily: "Major Mono Display";
`;

const description = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
);

export const Description = styled(description)`
  fontfamily: "Major Mono Display";
`;
