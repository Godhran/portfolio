import React from "react";
import { usePortfolioContext } from "../../../context";
import { MovingText, SymbolText } from "./component.styled";

const copy = {
  iMake: "I MAKE",
  things: "THINGS",
};

const IMakeThings = () => {
  const { minimalMode } = usePortfolioContext();

  const symbolTextID = "symbolText";

  return (
    <section
      className="p-3 p-md-5 max-width-full mt-5 mt-md-0"
      data-aos="fade-up"
    >
      <svg viewBox="0 0 1000 400" className="w-full max-w-[1250px]-mx-auto select-none">
        <symbol id={symbolTextID}>
          <SymbolText message={copy.iMake} x="50%" y="40%" />
          <SymbolText message={copy.things} x="50%" y="80%" />
        </symbol>

        <g>
          <MovingText
            minimalMode={minimalMode}
            symbolTextID={symbolTextID}
            first
          />
          <MovingText
            minimalMode={minimalMode}
            symbolTextID={symbolTextID}
            second
          />
          <MovingText
            minimalMode={minimalMode}
            symbolTextID={symbolTextID}
            third
          />
        </g>
      </svg>
    </section>
  );
};

export default IMakeThings;
