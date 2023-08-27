import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from "../../../context";
import "./style.css";
import { faQuestion, faSkull } from "@fortawesome/free-solid-svg-icons";
import { colours } from "../../../styles/colours";

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
        <a
          className="navbar-brand"
          style={{
            color: minimalMode ? colours.minimal.dark : colours.vibrant.a,
          }}
          href="#top"
        >
          Odhrán
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleExpanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
              <span className="nav-link toggle" onClick={toggleMinimalMode}>
                {!minimalMode ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSkull}
                      color={colours.vibrant.b}
                      className="me-2"
                    />
                    <span style={{ color: colours.vibrant.b }}>
                      {copy.disableMinimal}
                    </span>
                    <FontAwesomeIcon
                      icon={faSkull}
                      color={colours.vibrant.b}
                      className="ms-2"
                    />
                  </>
                ) : (
                  <>
                    <span style={{ color: colours.minimal.accent }}>
                      {copy.enableMinimal}
                    </span>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      color={colours.minimal.accent}
                    />
                  </>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
