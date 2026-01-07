import React, { useState } from "react";
import { usePortfolioStore } from "../../../stores/usePortfolioStore";
import { brand } from "./NavBar.constants";
import {
  Brand,
  Link,
  MobileNavBarToggler,
  Nav,
  NavBarLinks,
  ToggleText,
} from "./NavBar.elements";
import "./NavBar.styles.css";
import { copy } from "./NavBar.copy";

export const NavBar = () => {
  const { toggleColourScheme, colourScheme } = usePortfolioStore();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleToggleClick = () => {
    toggleColourScheme();
  };

  return (
    <nav
      className="fixed w-full z-20 top-0 start-0"
      style={{ backgroundColor: colourScheme.light }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand href="#top">{brand}</Brand>
        <MobileNavBarToggler onClick={toggleExpanded} expanded={expanded} />
        <NavBarLinks expanded={expanded}>
          <Link href={`#About`}>{copy.about}</Link>
          <Link href={`#Projects`}>{copy.projects}</Link>
          <Link href={`#WebApps`}>{copy.webApps}</Link>
          <ToggleText copy={copy} onClick={handleToggleClick} />
        </NavBarLinks>
      </div>
    </nav>
  );
};

export default NavBar;
