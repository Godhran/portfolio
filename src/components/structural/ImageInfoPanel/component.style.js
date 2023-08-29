import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const panel = ({
  minimalMode,
  children,
  className,
  animation = "fade-left",
}) => (
  <div
    className={`col flex flex-wrap content-evenly p-8 md:rounded content-evenly justify-items-center" ${className}`}
    data-aos={animation}
  >
    {children}
  </div>
);

const iconButton = ({ isLink, skill, minimalMode, href, className }) => {
  const colour = minimalMode ? colours.minimal.light : colours.vibrant.light;

  const label = skill === "android" ? "Google Play Store" : "Apple App Store";

  if (isLink) {
    return (
      <a href={href} aria-label={label} role="button">
        <FontAwesomeIcon
          icon={["fab", [skill]]}
          className={`ms-2 mx-3 ${className}`}
          size="2x"
        />
      </a>
    );
  }

  return (
    <FontAwesomeIcon
      icon={["fab", [skill]]}
      color={colour}
      className={`ms-2 mx-3`}
      size="2x"
    />
  );
};

export const Panel = styled(panel)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;

export const IconButton = styled(iconButton)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.c};
`;
