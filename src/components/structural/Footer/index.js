import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ title, skills, button, onClick }) => {
  const { minimalMode } = usePortfolioContext();

  const styles = {
    text: {
      color: !minimalMode ? colours.vibrant.a : colours.minimal.dark,
    },
    link: {
      color: !minimalMode ? colours.vibrant.dark : colours.minimal.accent,
    },
  };

  const github = "https://github.com/Godhran";
  const linkedIn = "https://uk.linkedin.com/in/odhran-gormley";

  return (
    <section id="Socials">
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href={linkedIn}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon
                icon={["fab", ["linkedin"]]}
                color={minimalMode ? colours.minimal.dark : colours.vibrant.a}
                className="ms-2 mx-3"
                size="2x"
              />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href={github}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <FontAwesomeIcon
                icon={["fab", ["github"]]}
                color={minimalMode ? colours.minimal.dark : colours.vibrant.a}
                className="ms-2 mx-3"
                onClick={() => (window.location.href = github)}
                size="2x"
              />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={styles.text}>
          {"© 2023 Copyright "}
          <a style={styles.link} href="https://www.godhran.com/">
            Odhrán
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
