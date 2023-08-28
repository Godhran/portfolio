import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const galleryWrapper = ({ className, minimalMode, children, animation }) => (
  <div
    className={`col flex flex-wrap content-center p-4 md:rounded container gallery  ${className}`}
    data-aos={animation}
  >
    {children}
  </div>
);

export const GalleryWrapper = styled(galleryWrapper)`
  backgroundcolor: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;
