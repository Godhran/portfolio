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
      className={`text-center ps-1 transition-colors text-[var(--c-dark)] hover:text-[var(--c-b)] ${className}`}
    >
      {children}
    </Link>
  );
};

export const SocialsLink = ({ href, icon, label }: SocialsLinkType) => {
  const { isRestrictedColourScheme } = usePortfolioStore();
  const colour = isRestrictedColourScheme ? "var(--c-dark)" : "var(--c-b)";
  const hoverFill = isRestrictedColourScheme ? "var(--c-c)" : "var(--c-c)";
  return (
    <Link
      to={href}
      className={`btn btn-link btn-floating btn-lg m-1`}
      aria-label={label}
      role="button"
    >
      <SVGIcon icon={icon} height={36} width={36} fill={colour} hoverFill={hoverFill} hasAction />
    </Link>
  );
};
