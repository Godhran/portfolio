import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";
import { faSkull, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linkText = ({ minimalMode, className, href, children }) => (
  <a className={`navbar-brand ${className}`} href={href}>
    {children}
  </a>
);

const toggleText = ({ minimalMode, className, copy, onClick }) => (
  <span className="nav-link toggle" onClick={onClick}>
    {!minimalMode ? (
      <>
        <FontAwesomeIcon icon={faSkull} className={`me-2 ${className}`} />
        <span className={className}>{copy.disableMinimal}</span>
        <FontAwesomeIcon icon={faSkull} className={`ms-2 ${className}`} />
      </>
    ) : (
      <>
        <span className={className}>{copy.enableMinimal}</span>
        <FontAwesomeIcon icon={faQuestion} className={className} />
      </>
    )}
  </span>
);

const navBarToggler = ({ onClick }) => (
  <button
    className="navbar-toggler"
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
