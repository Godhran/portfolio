import { useSpring } from "@react-spring/web";
import React from "react";
import { usePortfolioContext } from "../../../context";
import { Divider, TickerText, WarningBar } from "./component";

const copy = {
  warning: "UNDER CONSTRUCTION",
};

const UnderConstruction = () => {
  const { minimalMode } = usePortfolioContext();

  const textStart = 750;
  const textEnd = -300;

  const [underConstructionText] = useSpring(() => ({
    from: { x: textStart },
    to: [{ x: textStart }, { x: textEnd }],
    loop: true,
    config: {
      duration: 4500,
    },
  }));

  return (
    <svg viewBox="0 0 1500 750" className='w-full max-w-[500px] mx-auto'>
      <g transform="scale(3.7795276)">
        <g>
          <WarningBar
            minimalMode={minimalMode}
            d="M 26.14104,0 0,26.140523 v 20.16156 H 16.880107 L 63.182707,0 Z m 301.54232,0 46.30208,46.302083 H 396.875 V 32.149976 L 364.72502,0 Z"
          />
          <WarningBar
            minimalMode={minimalMode}
            d="M 89.64104,0 43.33844,46.302083 H 80.380623 L 126.68271,0 Z m 174.54232,0 46.30208,46.302083 h 37.04167 L 301.22502,0 Z"
          />
          <WarningBar
            minimalMode={minimalMode}
            d="m 153.14104,0 -46.30208,46.302083 h 37.04166 L 190.18271,0 Z m 47.54232,0 46.30208,46.302083 h 37.04167 L 237.72502,0 Z M 1.0051066,152.13542 0,153.14052 v 37.04167 l 38.046773,-38.04677 z m 351.8136634,0 44.05623,44.05622 v -37.04166 l -7.01456,-7.01456 z"
          />
          <WarningBar
            minimalMode={minimalMode}
            d="m 195.43303,21.208008 -25.09407,25.094075 h 50.18815 z M 64.505623,152.13542 18.20354,198.4375 h 37.041667 l 46.302083,-46.30208 z m 224.813147,0 46.30209,46.30208 h 37.04166 l -46.30208,-46.30208 z"
          />
          <WarningBar
            minimalMode={minimalMode}
            d="M 128.00562,152.13542 81.70354,198.4375 h 37.04167 l 46.30208,-46.30208 z m 97.81315,0 46.30209,46.30208 h 37.04166 l -46.30208,-46.30208 z"
          />
          <WarningBar
            minimalMode={minimalMode}
            d="m 191.50562,152.13542 -46.30208,46.30208 h 37.04167 l 13.18782,-13.18783 13.18783,13.18783 h 37.04166 l -46.30208,-46.30208 z"
          />
          <Divider
            minimalMode={minimalMode}
            d="m 0,52.916667 v 3.307291 h 396.875 v -3.307291 z m 0,89.296873 v 3.30729 h 396.875 v -3.30729 z"
          />
        </g>
        <TickerText
          minimalMode={minimalMode}
          message={copy.warning}
          transform={underConstructionText.x.to(
            (value) => `translate(${value}, 0)`
          )}
          x={0}
          y={115}
          fontSize={50}
          textAnchor="middle"
          fontWeight={"bolder"}
        />
      </g>
    </svg>
  );
};

export default UnderConstruction;
