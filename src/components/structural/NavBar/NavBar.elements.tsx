import React, { MouseEventHandler } from "react";
import { ReactNode } from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { SVGIcon } from "../../ui/iconography/SVGIcon/SVGIcon";

type NavProps = {
  className?: string;
  children: ReactNode;
};

type LinkTextProps = {
  className?: string;
  children: ReactNode;
  href: string;
};

type LinkProps = {
  className?: string;
  children: ReactNode;
  href: string;
};

type ToggleTextProps = {
  className?: string;
  copy: { disableMinimal: string; enableMinimal: string };
  onClick: MouseEventHandler<HTMLSpanElement>;
};

type NavBarTogglerProps = {
  className?: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
};

export const Nav = ({ children }: NavProps) => {
  return <nav className={`sticky top-0`}>{children}</nav>;
};

export const Brand = ({ href, children }: LinkTextProps) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const color = isRestrictedColourScheme
    ? { color: colourScheme.dark }
    : { color: colourScheme.b };
  return (
    <a href={href} className={`flex items-center brand`}>
      <span
        className="self-center text-2xl font-semibold whitespace-nowrap"
        style={color}
      >
        {children}
      </span>
    </a>
  );
};

export const Link = ({ href, children }: LinkProps) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  const style = isRestrictedColourScheme
    ? { fill: colourScheme.dark }
    : { fill: colourScheme.a };
  return (
    <li>
      <a
        style={style}
        className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 font-bold font-display lowercase`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export const ToggleText = ({ className, copy, onClick }: ToggleTextProps) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();
  if (isRestrictedColourScheme) {
    return (
      <span
        className="nav-link toggle cursor-pointer"
        role="button"
        onClick={onClick}
      >
        <span
          className={`py-2 pl-3 rounded font-display lowercase md:bg-transparent md:p-0 font-bold toggler-text flex flex-row items-center`}
        >
          {copy.enableMinimal}
          <SVGIcon icon="questionMark" className={className} />
        </span>
      </span>
    );
  }
  const style = { color: colourScheme.b };

  return (
    <span
      className="nav-link toggle cursor-pointer select-none"
      role="button"
      onClick={onClick}
      style={style}
    >
      <span
        className={`py-2 rounded font-display lowercase md:bg-transparent md:p-0 font-bold toggler-tex flex flex-row items-center`}
      >
        <SVGIcon icon="skull" className={className} fill={colourScheme.b} />
        {copy.disableMinimal}
        <SVGIcon icon="skull" className={className} fill={colourScheme.b} />
      </span>
    </span>
  );
};

export const NavBarLinks = ({
  children,
  expanded,
}: {
  children: ReactNode | ReactNode[];
  expanded: boolean;
}) => {
  return (
    <div
      className={`${expanded ? "" : "hidden"} w-full md:block md:w-auto`}
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {children}
      </ul>
    </div>
  );
};

export const MobileNavBarToggler = ({
  onClick,
  expanded,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  expanded: boolean;
}) => {
  const { colourScheme, isRestrictedColourScheme } = usePortfolioStore();

  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
      aria-controls="navbar-default"
      aria-expanded={expanded}
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      {isRestrictedColourScheme ? (
        <SVGIcon icon="hamburger" className={"size-2xl"} />
      ) : (
        <SVGIcon icon="hamburger" className={"size-2xl"} />
      )}
    </button>
  );
};

export const NavBarToggler = ({ onClick, className }: NavBarTogglerProps) => (
  <button
    className={`navbar-toggler block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 font-bold toggler`}
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
