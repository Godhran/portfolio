import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import { skillDescriptions } from "../Section/skills";

type PanelProps = {
  minimalMode: boolean;
  children: ReactNode;
  className?: string;
  animation: string;
};

type IconButtonProps = {
  minimalMode: boolean;
  className?: string;
  href: string;
  isLink: boolean;
  skill: IconName;
};

type HeaderProps = {
  minimalMode: boolean;
  className?: string;
  text: string;
};

const panel = ({
  minimalMode,
  children,
  className,
  animation = "fade-left",
}: PanelProps) => (
  <div
    className={`col flex flex-wrap content-evenly p-8 md:rounded content-evenly justify-items-center" ${className}`}
    data-aos={animation}
  >
    {children}
  </div>
);

const iconButton = ({
  isLink,
  skill,
  minimalMode,
  href,
  className,
}: IconButtonProps) => {
  const colour = minimalMode ? colours.minimal.light : colours.vibrant.light;

  const label = skill === "android" ? "Google Play Store" : "Apple App Store";

  if (isLink) {
    return (
      <a href={href} aria-label={label} role="button">
        <FontAwesomeIcon
          icon={["fab", skill]}
          className={`ms-2 mx-3 ${className}`}
          size="2x"
          title={skillDescriptions[skill]}
        />
      </a>
    );
  }

  return (
    <FontAwesomeIcon
      icon={["fab", skill]}
      title={skillDescriptions[skill]}
      color={colour}
      className={`ms-2 mx-3`}
      size="2x"
    />
  );
};

const header = ({ text, className }: HeaderProps) => (
  <h4 className={`text-xl font-display lowercase font-bold ${className}`}>
    {text}
  </h4>
);

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

export const Header = styled(header)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;
