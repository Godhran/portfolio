import styled from "@emotion/styled";
import { colours } from "./styles/colours";

const main = ({
  minimalMode,
  children,
  className,
}) => (
  <main
    className={className}
  >
    {children}
  </main>
);

export const Main = styled(main)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
    text-align: center;
    min-height: 100vh;
    overflow: hidden;
    font-family: 'Noto Sans';
    
`;
