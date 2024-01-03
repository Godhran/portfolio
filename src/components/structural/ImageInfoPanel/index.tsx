import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import { IconButton } from "./component.style";
import { IconName } from "@fortawesome/free-solid-svg-icons";

const testIds = {
  SectionContainer: "section-container",
  AnimationContainer: "animation-container",
  InformationContainer: "information-container",
  LeftToRight: "left-to-right",
  RightToLeft: "right-to-left",
};

type Props = {
  animation: JSX.Element;
  content: Content[];
  section: string;
  isAnimated?: boolean;
  rightToLeft?: boolean;
  header?: string;
  testId?: string;
};

type Content = {
  title: string;
  body: string;
  skills?: string[];
  links?: { android: string; apple: string };
};

const ImageInfoPanel = ({
  rightToLeft = false,
  animation,
  content,
  header,
  section,
  isAnimated = true,
  testId = "image-info-panel",
}: Props) => {
  const { minimalMode } = usePortfolioContext();
  const styles = {
    textPanel: {
      backgroundColor: !minimalMode ? colours.vibrant.a : colours.minimal.dark,
      color: !minimalMode ? colours.vibrant.light : colours.minimal.light,
    },
  };

  return (
    <section
      id={section}
      className="mt-5"
      data-testid={`${testId}-${testIds.SectionContainer}`}
    >
      <div className="container py-4 py-xl-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {!rightToLeft ? (
            <>
              <div
                className="col order-first"
                data-aos={isAnimated ? "fade-right" : "none"}
                data-testid={`${testId}-${testIds.AnimationContainer}-${testIds.LeftToRight}`}
              >
                {animation}
              </div>
              <div
                className="col flex flex-wrap content-evenly p-8 md:rounded content-evenly justify-items-center"
                data-aos={isAnimated ? "fade-left" : "none"}
                style={styles.textPanel}
                data-testid={`${testId}-${testIds.InformationContainer}-${testIds.LeftToRight}`}
              >
                {header ? (
                  <div
                    className={`text-center text-md-start col flex flex-wrap place-items-center md:place-items-start mb-5`}
                  >
                    <h4 className="text-xl font-display lowercase">{header}</h4>
                  </div>
                ) : null}
                {content.map(({ title, skills, body, links }, index) => (
                  <div
                    className={`text-center ${
                      index + 1 === content.length ? "" : "mb-5"
                    }`}
                    key={`content_${index}_LTR`}
                  >
                    <div>
                      {skills ? (
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary flex flex-wrap justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                          {skills.map((skill: string) => (
                            <IconButton
                              key={`skill_icon_${skill}`}
                              //@ts-ignore todo fix skill bracket notation
                              isLink={!!links[skill]}
                              skill={skill as IconName}
                              minimalMode={minimalMode}
                              //@ts-ignore todo fix skill bracket notation
                              href={links[skill]}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="place-items-center md:place-items-start text-center md:text-left">
                      <h4 className="text-xl inline-block font-display lowercase">
                        {title}
                      </h4>
                      <br />
                      <p className="inline-block italic">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div
                className="col flex flex-wrap content-evenly p-8 md:rounded content-evenly justify-items-center"
                data-aos={isAnimated ? "fade-right" : "none"}
                style={styles.textPanel}
                data-testid={`${testId}-${testIds.InformationContainer}-${testIds.RightToLeft}`}
              >
                {header ? (
                  <div
                    className={`text-center text-md-start col flex flex-wrap place-items-center md:place-items-start md:mb-0 md-3`}
                  >
                    <h4 className="text-2xl font-display lowercase">
                      {header}
                    </h4>
                  </div>
                ) : null}
                {content.map(({ title, skills, body, links }, index) => (
                  <div
                    className={`text-center text-md-start col flex flex-wrap place-items-center md:place-items-start ${
                      index + 1 === content.length ? "" : "mb-5"
                    }`}
                    key={`content_${index}_RTL`}
                  >
                    <div>
                      {skills ? (
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary flex flex-wrap justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                          {skills.map((skill) => (
                            <IconButton
                              key={`skill_icon_${skill}`}
                              //@ts-ignore todo fix skill bracket notation
                              isLink={!!links[skill]}
                              skill={skill as IconName}
                              minimalMode={minimalMode}
                              //@ts-ignore todo fix skill bracket notation
                              href={links[skill]}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap place-items-center md:place-items-start text-left">
                      <h4 className="text-xl inline-block font-display lowercase">
                        {title}
                      </h4>
                      <p className="inline-block italic">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="col order-first md:order-last"
                data-aos={isAnimated ? "fade-left" : "none"}
                data-testid={`${testId}-${testIds.AnimationContainer}-${testIds.RightToLeft}`}
              >
                {animation}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageInfoPanel;
