import { useState } from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import { Brand, MinimalModeToggler, NavBarToggler } from "./component";

const NavBar = () => {
  const { minimalMode, toggleMinimalMode } = usePortfolioContext();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const copy = {
    disableMinimal: "Fewer Colours",
    enableMinimal: "A little weirder",
    about: "About",
    projects: "Projects",
    other: "Other",
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top p-md-3 p-1"
      style={{
        backgroundColor: minimalMode
          ? colours.minimal.light
          : colours.vibrant.light,
      }}
    >
      <div className="container">
        <Brand minimalMode={minimalMode} href="#top">
          Odhrán
        </Brand>
        <NavBarToggler onClick={toggleExpanded} />
        <div
          className={`${
            expanded ? "" : "collapse"
          } navbar-collapse justify-content-lg-end`}
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href={`#${copy.about}`}>
                {copy.about}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={`#${copy.projects}`}>
                {copy.projects}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={`#Misc`}>
                {"Misc"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`#Socials`}>
                {"Socials"}
              </a>
            </li>
            <li className="nav-item">
              <MinimalModeToggler
                minimalMode={minimalMode}
                copy={copy}
                onClick={toggleMinimalMode}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
