import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageInfoPanel = ({
  rightToLeft,
  animation,
  content,
  links,
  italicTitle,
  header,
  section,
  footer,
}) => {
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
    <section id={section} className="mt-5">
      <div className="container py-4 py-xl-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {!rightToLeft ? (
            <>
              <div
                data-aos="fade-right"
                className="col flex flex-wrap content-center"
              >
                {animation}
              </div>
              <div
                className="col flex flex-wrap content-evenly p-8 md:rounded content-evenly justify-items-center"
                data-aos="fade-left"
                style={styles.textPanel}
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
                    {skills ? (
                      <div>
                        {skills.map((skill, index) => {
                          const isLink = !!links[skill];
                          const colour = minimalMode
                            ? colours.minimal.light
                            : colours.vibrant.light;

                          if (isLink) {
                            return (
                              <a
                                href={links[skill]}
                                key={`skill_${index}_${skill}_LTR`}
                              >
                                <FontAwesomeIcon
                                  icon={["fab", [skill]]}
                                  className="mx-3"
                                  size="2x"
                                  style={styles.linkIcon}
                                />
                              </a>
                            );
                          }

                          return (
                            <FontAwesomeIcon
                              key={`skill_${index}_${skill}_LTR`}
                              icon={["fab", [skill]]}
                              color={colour}
                              className="mx-3"
                              size="2x"
                            />
                          );
                        })}
                      </div>
                    ) : null}
                    <div className="place-items-center md:place-items-start text-center md:text-left">
                      <h4 className="text-xl inline-block font-display lowercase">{title}</h4>
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
                data-aos="fade-right"
                style={styles.textPanel}
              >
                {header ? (
                  <div
                    className={`text-center text-md-start col flex flex-wrap place-items-center md:place-items-start md:mb-0 md-3`}
                  >
                    <h4 className="text-2xl font-display lowercase">{header}</h4>
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
                          {skills.map((skill) => {
                            const isLink = !!links[skill];
                            const colour = minimalMode
                              ? colours.minimal.light
                              : colours.vibrant.light;

                            if (isLink) {
                              return (
                                <a
                                  href={links[skill]}
                                  key={`skill_${index}_${skill}_RTL`}
                                >
                                  <FontAwesomeIcon
                                    icon={["fab", [skill]]}
                                    className="ms-2 mx-3"
                                    size="2x"
                                    style={styles.linkIcon}
                                  />
                                </a>
                              );
                            }

                            return (
                              <FontAwesomeIcon
                                key={`skill_${index}_${skill}_RTL`}
                                icon={["fab", [skill]]}
                                color={colour}
                                className="ms-2 mx-3"
                                size="2x"
                              />
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap place-items-center md:place-items-start text-left">
                      <h4 className="text-xl inline-block font-display lowercase">{title}</h4>
                      <p className="inline-block italic">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="col order-first md:order-last"
                data-aos="fade-left"
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
