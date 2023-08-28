import React from "react";
import { usePortfolioContext } from "../../../context";
import { MovingText, Svg, SymbolText } from "./component";

const copy = {
  iMake: "I MAKE",
  things: "THINGS",
};

const IMakeThings = () => {
  const { minimalMode } = usePortfolioContext();

  const symbolTextID = "symbolText";

  return (
    <section className="p-3 p-md-5 width-100 mt-5 mt-md-0" data-aos="fade-up">
      <Svg viewBox="0 0 1000 400" maxWidth='1250px'>
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
      </Svg>
    </section>
  );
};

export default IMakeThings;
