import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import "./style.css";

const IMakeThings = () => {
  const { minimalMode, toggleMinimalMode } = usePortfolioContext();

  const styles = {
    first: {
      stroke: !minimalMode ? colours.vibrant.a : colours.minimal.dark,
    },
    second: {
      stroke: !minimalMode ? colours.vibrant.b : colours.minimal.dark,
    },
    third: {
      stroke: !minimalMode ? colours.vibrant.c : colours.minimal.dark,
    },
  };

  const symbolTextID = "symbolText";

  return (
    <section
      className="p-3 p-md-5 width-100 mt-5 mt-md-0"
      data-aos="fade-up"
      style={styles.section}
    >
      <svg viewBox="0 0 1000 400">
        <symbol id={symbolTextID}>
          <text x="50%" y="40%" className="symbolText">
            I MAKE
          </text>
          <text x="50%" y="80%" className="symbolText">
            Things
          </text>
        </symbol>
        <g>
          <use
            xlinkHref={`#${symbolTextID}`}
            className="animatedText"
            style={styles.first}
          />
          <use
            xlinkHref={`#${symbolTextID}`}
            className="animatedText"
            style={styles.second}
          />
          <use
            xlinkHref={`#${symbolTextID}`}
            className="animatedText"
            style={styles.third}
          />
        </g>
      </svg>
    </section>
  );
};

export default IMakeThings;
