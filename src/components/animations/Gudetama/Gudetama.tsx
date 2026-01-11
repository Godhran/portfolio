import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import { animationDefaults } from "./Gudetama.constants";
import {
  Character,
  ChopStick,
  ChopSticks,
  CurvedText,
  FacialFeature,
  Pah,
  Shadow,
  Shell,
  Yolk,
} from "./Gudetama.elements";
import { copy } from "./Gudetama.copy";

export const Gudetama = () => {
  const [pahVisible, setPahVisible] = useState(false);
  const {
    rockingAngle,
    shadowDisplace,
    chopSticksLocationCoordinates,
    chopSticksPokeCoordinates,
    primaryTextOffset,
    secondaryTextOffset,
  } = animationDefaults;

  const [rockGudetama] = useSpring(() => ({
    from: { rotate: -rockingAngle },
    to: [{ rotate: rockingAngle }, { rotate: -rockingAngle }],
    loop: true,
    config: {
      duration: 2500,
    },
  }));

  const [moveShadow] = useSpring(() => ({
    from: { x: -shadowDisplace },
    to: [{ x: shadowDisplace }, { x: -shadowDisplace }],
    loop: true,
    config: {
      duration: 2500,
    },
  }));

  const chopstickAnimationConfig = {
    from: {
      x: chopSticksLocationCoordinates.x,
      y: chopSticksLocationCoordinates.y,
    },
    to: [
      { x: chopSticksPokeCoordinates.x, y: chopSticksPokeCoordinates.y },
      {
        x: chopSticksLocationCoordinates.x,
        y: chopSticksLocationCoordinates.y,
      },
    ],
    pause: true,
    config: {
      duration: 1000,
    },
    onChange: (value: any) => {
      if (!pahVisible && value <= -375) {
        setPahVisible(true);
        pahTextApi.resume();
      }
    },
  };

  const [moveChopSticks, moveChopSticksApi] = useSpring(
    () => chopstickAnimationConfig
  );

  const pahTextAnimationConfig = {
    from: { opacity: 1, y: 0 },
    to: { opacity: 0, y: -575 },
    pause: true,
    config: {
      duration: 1000,
    },
    onResolve: () => {
      moveChopSticksApi.start({ reset: true, ...chopstickAnimationConfig });
      pahTextApi.start({ reset: true, ...pahTextAnimationConfig });
    },
  };

  const [pahText, pahTextApi] = useSpring(() => pahTextAnimationConfig);

  const onClickGudetama = () => {
    moveChopSticksApi.resume();
  };

  const topTextPath = "M180,180C600,150,765,265,865,460.63";
  const bottomTextPath = "M 80 700 c 0 900 1084 635 1301 392";

  return (
    <svg
      viewBox="0 0 1500 1500"
      className="max-h-screen mx-auto"
      // data-aos="fade-up"
    >
      <defs>
        <path id="topTextPath" d={topTextPath} />
        <path id="bottomTextPath" d={bottomTextPath} />
      </defs>

      <g>
        <Shadow
          transform={moveShadow.x.to((value) => `translate(${value} 0)`)}
        />

        <Character
          transform={rockGudetama.rotate.to(
            (value) => `rotate(${value} 750  750)`
          )}
          onClick={onClickGudetama}
        >
          <Yolk
            d="M378.5,715.5C312.12,643.35,290,343,559,343c260,0,178,260,330,260c24.22,0,53.27-20.82,88-9
                            c28.45,9.68,46.69,50.76,66.53,50.76c63.19,0,58.62,15.22,58.62,31.77c0,38.5-106.5,10.5-106.5,10.5S991.35,867.57,876,885
                            C732.48,906.69,433.23,774.99,378.5,715.5z"
          />
          <Shell
            d="M1070,706.78c0,214.84-175.66,410.72-390.5,410.72s-389-174.16-389-389c0-18.4,1.28-36.5,3.75-54.21
                            L476.5,578.5l77,162l117-21l55,30l70-68l90,53L1070,706.78z"
          />
          <Yolk d="M367.5,552.5c0,0-69.56,43.93-55,98c14,52,58.17,59.42,87,58c29.83-1.47-48.24-93.01,19.76-112.01" />
          <Yolk
            d="M789,532c-19.29,0.77-58.46,28.91-50.5,46.5c5.77,12.76,42.27-9.24,56-12c14.84-2.98,35.25,22.47,37.5,7.5
                            C834.61,556.61,806.57,531.3,789,532z"
          />
          <FacialFeature
            transform="matrix(0.866 -0.5 0.5 0.866 -156.7364 336.3152)"
            cx={549.2}
            cy={460.63}
            rx={24.26}
            ry={13.39}
          />
          <FacialFeature
            transform="matrix(0.9884 -0.1517 0.1517 0.9884 -56.5346 106.0137)"
            cx={666.72}
            cy={423.63}
            rx={21.56}
            ry={16.32}
          />
          <FacialFeature
            transform="matrix(0.9631 -0.269 0.269 0.9631 -110.2961 188.0305)"
            cx={631}
            cy={496.5}
            rx={51}
            ry={15.5}
          />
          <Yolk
            highlight
            d="M403,489c-16.54-15.14,27.91-63.75,46-77c19.28-14.11,91.44-37.57,93-22c1,10-36.45,23.4-70,49
                    C434,468,418.72,503.38,403,489z"
          />
          <Yolk d="M864.5,757.5" />
          <Yolk
            d="M847.3,666.23c0,0,59.92-37.13,82.29-35.6c26.3,1.79,63.84,54.59,90.2,54.59c38.77,0,49.07,13.7,45.1,26.11
                              c-3.59,11.22-16.86,17.89-28.48,19.78c-29.25,4.77-18.99-15.62-122.64-15.62"
          />
        </Character>

        <g className="gudetama">
          <CurvedText
            href="#topTextPath"
            top
            startOffset={primaryTextOffset}
            message={copy.soTiring}
            duration={4}
            id={"topTextPathAnimation"}
          />

          <CurvedText
            startOffset={secondaryTextOffset}
            duration={6}
            message={copy.iCant}
            href="#bottomTextPath"
            id={"bottomTextPathAnimation"}
          />
          {pahVisible && (
            <Pah
              transform={pahText.y.to((value) => `translate(0 ${value})`)}
              opacity={pahText.opacity}
              scale={pahText.opacity}
              message={copy.pah}
            />
          )}
        </g>
      </g>

      <ChopSticks
        transform={moveChopSticks.x.to(
          (value) => `translate(${value} ${-value})`
        )}
      >
        <ChopStick points="1168.25,212.38 1807.27,-671.32 1765.79,-700.64 1146.21,196.81" />
        <ChopStick points=" 1202.11,248.12 2019.06,-564.28 1985,-601.97 1184.01,228.1" />
      </ChopSticks>
    </svg>
  );
};

export default Gudetama;
