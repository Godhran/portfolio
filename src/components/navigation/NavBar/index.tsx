import React from "react";
import { useState } from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import { Brand, Link, MinimalModeToggler, Nav } from "./component.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

const copy = {
  disableMinimal: "Fewer Colours",
  enableMinimal: "A little weirder",
  about: "About",
  projects: "Projects",
  misc: "Misc",
  socials: "Socials",
  other: "Other",
};

const NavBar = () => {
  const { minimalMode, toggleMinimalMode } = usePortfolioContext();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Nav minimalMode={minimalMode}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand minimalMode={minimalMode} href="#top">
          Odhrán
        </Brand>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleExpanded}
        >
          <span className="sr-only">Open main menu</span>
          {minimalMode ? (
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              color={expanded ? colours.minimal.accent : colours.minimal.dark}
            />
          ) : (
            <FontAwesomeIcon
              icon={faHamburger}
              size="2xl"
              color={expanded ? colours.vibrant.d : colours.vibrant.a}
            />
          )}
        </button>
        <div
          className={`${expanded ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <Link minimalMode={minimalMode} href={`#About`}>
              {copy.about}
            </Link>
            <Link minimalMode={minimalMode} href={`#Projects`}>
              {copy.projects}
            </Link>
            <Link minimalMode={minimalMode} href={`#Misc`}>
              {copy.misc}
            </Link>
            <Link minimalMode={minimalMode} href={`#Socials`}>
              {copy.socials}
            </Link>
            <li>
              <MinimalModeToggler
                minimalMode={minimalMode}
                copy={copy}
                onClick={toggleMinimalMode}
              />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
