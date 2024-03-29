import React from "react";
import { usePortfolioContext } from "../../../context";
import { Social, CopyrightText, LinkText } from "./components.style";

const Footer = () => {
  const { minimalMode } = usePortfolioContext();

  const github = "https://github.com/Godhran";
  const linkedIn = "https://uk.linkedin.com/in/odhran-gormley";

  return (
    <section id="Socials">
      <footer className="text-center">
        <div className="container pt-4 mx-auto">
          <section className="mb-4">
            <Social
              href={linkedIn}
              icon={["fab", "linkedin"]}
              minimalMode={minimalMode}
              label={"Linked In"}
            />
            <Social
              href={github}
              icon={["fab", "github"]}
              minimalMode={minimalMode}
              label={"Git Hub"}
            />
          </section>
        </div>

        <CopyrightText minimalMode={minimalMode}>
          {"© 2024 Copyright "}
          <LinkText href="https://www.godhran.com/" minimalMode={minimalMode}>
            Odhrán
          </LinkText>
        </CopyrightText>
      </footer>
    </section>
  );
};

export default Footer;
