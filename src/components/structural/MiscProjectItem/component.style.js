import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const panel = ({ minimalMode, children, className, animation }) => (
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
