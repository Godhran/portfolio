import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import "./style.css";

const MiscProjectsItem = ({ children, animation = "fade-up" }) => {
  const { minimalMode } = usePortfolioContext();

  const styles = {
    textPanel: {
      backgroundColor: !minimalMode ? colours.vibrant.a : colours.minimal.dark,
      color: !minimalMode ? colours.vibrant.light : colours.minimal.light,
    },
    link: {
      color: !minimalMode ? colours.vibrant.f : colours.minimal.accent,
    },
    linkIcon: {
      color: !minimalMode ? colours.vibrant.c : colours.minimal.accent,
    },
  };

  return (
    <div className="container py-4 py-xl-5">
      <div className="row row-cols-1">
        <div
          className="col d-flex flex-column justify-content-center p-4 md:rounded"
          data-aos={animation}
          style={styles.textPanel}
        >
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MiscProjectsItem;
