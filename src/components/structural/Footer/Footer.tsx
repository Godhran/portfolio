import React from "react";
import { SocialsLink, CopyrightText, LinkText } from "./Footer.elements";

export const Footer = () => {
  const github = "https://github.com/Godhran";
  const linkedIn = "https://uk.linkedin.com/in/odhran-gormley";

  return (
    <section id="Socials">
      <footer className="text-center">
        <div className="container pt-4 mx-auto">
          <section className="mb-4 flex flex flex-row justify-center items-center content-center gap-4">
            <SocialsLink
              href={linkedIn}
              icon={'linkedIn'}
              label={"Linked In"}
            />
            <SocialsLink
              href={github}
              icon={'github'}
              label={"Git Hub"}
            />
          </section>
        </div>

        <CopyrightText>
          {"© 2025 Copyright "}
          <LinkText href="https://www.odhran.fun/">Odhrán</LinkText>
        </CopyrightText>
      </footer>
    </section>
  );
};

export default Footer;
