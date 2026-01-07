import { ReactNode } from "react";

export type FooterContent = {
  title: string;
  link: string;
};

export type CopyrightTextType = {
  className?: string;
  children: ReactNode;
};

export type LinkType = {
  className?: string;
  href: string;
  children: JSX.Element | JSX.Element[] | string;
};

export type SocialsLinkType = {
  className?: string;
  href: string;
  icon: "linkedIn" | "github";
  label: string;
};
