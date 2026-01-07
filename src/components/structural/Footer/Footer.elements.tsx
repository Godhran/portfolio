import React from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { SVGIcon } from "../../ui/iconography/SVGIcon/SVGIcon";
import { CopyrightTextType, LinkType, SocialsLinkType } from "./Footer.types";
import { Link } from "react-router-dom";

export const CopyrightText = ({
  children,
  className = "",
}: CopyrightTextType) => (
  <div className={`text-center pb-5 ${className}`}>{children}</div>
);

export const LinkText = ({ className = "", children, href }: LinkType) => {
  const { colourScheme } = usePortfolioStore();

  return (
    <Link
      to={href}
      className={`text-center ps-1 transition-colors duration-150
        hover:text-[color:var(--accent)]${className}`}
      style={
        {
          ["--accent" as any]: colourScheme.d,
        } as React.CSSProperties
      }
    >
      {children}
    </Link>
  );
};

export const SocialsLink = ({
  className = "",
  href,
  icon,
  label,
}: SocialsLinkType) => {
  return (
    <Link
      to={href}
      className={`btn btn-link btn-floating btn-lg text-dark m-1 ${className}`}
      aria-label={label}
      role="button"
    >
      <SVGIcon icon={icon} height={36} width={36} hasAction />
    </Link>
  );
};
