import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { faSkull, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type NavProps = {
  minimalMode: boolean;
  className?: string;
  children: ReactNode;
};

type LinkTextProps = {
  minimalMode: boolean;
  className?: string;
  children: ReactNode;
  href: string;
};

type LinkProps = {
  minimalMode: boolean;
  className?: string;
  children: ReactNode;
  href: string;
};

type ToggleTextProps = {
  minimalMode: boolean;
  className?: string;
  copy: { disableMinimal: string; enableMinimal: string };
  onClick: MouseEventHandler<HTMLSpanElement>;
};

type NavBarTogglerProps = {
  className?: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
};

const nav = ({ minimalMode, className, children }: NavProps) => (
  <nav className={`sticky top-0   ${className}`}>{children}</nav>
);

const linkText = ({
  minimalMode,
  className,
  href,
  children,
}: LinkTextProps) => (
  <a href={href} className={`flex items-center ${className}`}>
    <span className="self-center text-2xl font-semibold whitespace-nowrap">
      {children}
    </span>
  </a>
);

const link = ({ className, href, children, minimalMode }: LinkProps) => (
  <li>
    <a
      className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 font-bold font-display lowercase ${className}`}
      href={href}
    >
      {children}
    </a>
  </li>
);

const toggleText = ({
  minimalMode,
  className,
  copy,
  onClick,
}: ToggleTextProps) => (
  <span className="nav-link toggle" onClick={onClick}>
    {!minimalMode ? (
      <>
        <FontAwesomeIcon icon={faSkull} className={`me-2 ${className}`} />
        <span
          className={`py-2 rounded font-display lowercase md:bg-transparent md:p-0 font-bold ${className}`}
        >
          {copy.disableMinimal}
        </span>
        <FontAwesomeIcon icon={faSkull} className={`ms-2 ${className}`} />
      </>
    ) : (
      <>
        <span
          className={`py-2 pl-3 rounded font-display lowercase md:bg-transparent md:p-0 font-bold ${className}`}
        >
          {copy.enableMinimal}
        </span>
        <FontAwesomeIcon icon={faQuestion} className={className} />
      </>
    )}
  </span>
);

const navBarToggler = ({ onClick, className }: NavBarTogglerProps) => (
  <button
    className={`navbar-toggler block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 font-bold ${className}`}
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

export const Nav = styled(nav)`
  background-color: ${(props) =>
    props.minimalMode ? colours.minimal.light : colours.vibrant.light};
`;

export const Link = styled(link)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};

  &:hover {
    color: ${(props) =>
      props.minimalMode ? colours.minimal.accent : colours.vibrant.b};
  }
`;

export const Brand = styled(linkText)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
  font-family: "Major Mono Display", monospace;
  text-transform: lowercase;
  font-weight: bold;
`;

export const NavBarToggler = styled(navBarToggler)`
  font-family: "Major Mono Display", monospace;
  text-transform: lowercase;
  font-weight: bold;
`;

export const MinimalModeToggler = styled(toggleText)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.b};
  cursor: pointer;
`;
