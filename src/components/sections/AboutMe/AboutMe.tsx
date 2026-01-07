import React from "react";
import { content } from "./AboutMe.constants";
import { SVGIcon } from "../../ui/iconography/SVGIcon/SVGIcon";
import { H3 } from "../../ui/typography/H3";
import { aboutMeTestIDs } from "./AboutMe.testIDs";

const testIds = {
  SectionContainer: "section-container",
  AnimationContainer: "animation-container",
  InformationContainer: "information-container",
  LeftToRight: "left-to-right",
  RightToLeft: "right-to-left",
};

type Props = {
  animation: JSX.Element;
  id: string;
  isAnimated?: boolean;
  rightToLeft?: boolean;
  header?: string;
  testId?: string;
};

export const AboutMe = ({
  rightToLeft = false,
  animation,
  header,
  id,
  isAnimated = true,
  testId = "image-info-panel",
}: Props) => {
  return (
    <section
      id={id}
      className="mt-5"
      data-testid={`${aboutMeTestIDs.SectionContainer}`}
    >
      <div className="container py-4 py-xl-5 mx-auto px-0 md:px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
          <div
            className={`col ${rightToLeft ? "order-last" : "order-first"}`}
            // data-aos={
            //   isAnimated ? (rightToLeft ? "fade-left" : "fade-right") : "none"
            // }
            data-testid={`${aboutMeTestIDs.AnimationContainer}`}
          >
            {animation}
          </div>
          <div
            className={`grid grid-rows-0 md:grid-rows-1 grid-flow-row gap-0 flex align-content-center items-center max-w-xl`}
            // data-aos={
            //   isAnimated ? (rightToLeft ? "fade-right" : "fade-left") : "none"
            // }
            data-testid={`${aboutMeTestIDs.InformationContainer}`}
          >
            {header ? (
              <div
                className={`text-center text-md-start col flex flex-wrap place-items-center md:place-items-start mb-5 md:mb-0 mx-auto md:mx-0`}
              >
                <H3>{header}</H3>
              </div>
            ) : null}

            <div className="space-y-10 text-left p-5">
              {content.map(({ title, framework },index) => {
                return (
                  <div className="flex flex-col xl:flex-row gap-2 justify-between" key={`content-item-${index}`}>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <div className="flex max-w-sm w-full flex-wrap gap-x-4 gap-y-3">
                      {framework.map(({ icon, title }, index) => {
                        return (
                          <div
                            className="me-1 inline-flex text-sm text-gray-800 gap-x-2"
                            key={`framework-icon-${index}`}
                          >
                            <SVGIcon icon={icon} />
                            <p>{title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
