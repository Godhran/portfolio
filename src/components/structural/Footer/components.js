import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import { colours } from "../../../styles/colours";

const CopyrightTextContainer = ({ className, children, minimalMode }) => (
  <div className={`text-center pb-5 ${className}`}>{children}</div>
);

export const CopyrightText = styled(CopyrightTextContainer)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};
`;

const Link = ({ className, children, href, minimalMode }) => (
  <a className={`text-center ps-1 ${className}`} href={href}>
    {children}
  </a>
);

export const LinkText = styled(Link)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.accent : colours.vibrant.a};

  &:hover {
    color: ${(props) =>
      props.minimalMode ? colours.minimal.accent : colours.vibrant.d};
  }
`;

const SocialsLink = ({ className, href, icon, minimalMode }) => (
  <a
    className="btn btn-link btn-floating btn-lg text-dark m-1"
    href={href}
    role="button"
  >
    <FontAwesomeIcon
      icon={icon}
      className={`ms-2 mx-3 ${className}`}
      size="2x"
    />
  </a>
);

export const Social = styled(SocialsLink)`
  color: ${(props) =>
    props.minimalMode ? colours.minimal.dark : colours.vibrant.a};

  &:hover {
    color: ${(props) =>
      props.minimalMode ? colours.minimal.accent : colours.vibrant.d};
  }
`;
