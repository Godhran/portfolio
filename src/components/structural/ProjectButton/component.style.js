import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const wrapper = ({ className, children }) => (
  <div
    className={`mx-auto max-w rounded overflow-hidden shadow-lg p-4 h-full drop-shadow-md bg-white m-3 ${className}`}
  >
    {children}
  </div>
);

export const Wrapper = styled(wrapper)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

const title = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Title = styled(title)`
  fontfamily: "Major Mono Display";
`;

const description = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Description = styled(description)`
  fontfamily: "Major Mono Display";
`;
