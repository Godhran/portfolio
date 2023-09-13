import React, { useState } from "react";
import SISU from "../../../assets/projects/SISU_FULL.png";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import Gallery from "../Gallery";
import MiscProjectsItem from "../MiscProjectItem";
import ProjectButton from "../ProjectButton";
import { RoundedButton } from "./component.style";

const MiscProjectsPanel = () => {
  const { minimalMode } = usePortfolioContext();
  const [visibleSection, setVisibleSection] = useState("");

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
    <section id="Misc" className="mt-5">
      <div className="container py-4 xl:py-5 mx-auto">
        <div className="row row-cols-1">
          <div
            className="col flex flex-col justify-content-center p-4 md:rounded"
            data-aos="zoom-in"
            style={styles.textPanel}
          >
            <div className="container">
              <div className="grid grid-cols-2   gap-2 place-content-between">
                <RoundedButton
                  onClick={() => {
                    setVisibleSection(
                      visibleSection === "gallery" ? "" : "gallery"
                    );
                  }}
                  data-toggle="collapse"
                  aria-expanded="false"
                  minimalMode={minimalMode}
                  start
                >
                  {visibleSection === "gallery" ? "Close" : "Gallery"}
                </RoundedButton>
                <RoundedButton
                  onClick={() => {
                    setVisibleSection(visibleSection === "web" ? "" : "web");
                  }}
                  data-toggle="collapse"
                  aria-expanded="false"
                  minimalMode={minimalMode}
                >
                  {visibleSection === "web" ? "Close" : "Web Apps"}
                </RoundedButton>
              </div>
              <div className="row">
                <div
                  className={`${
                    visibleSection === "gallery" ? "" : "collapse"
                  } multi-collapse`}
                >
                  {visibleSection === "gallery" ? (
                    <MiscProjectsItem>
                      <Gallery />
                    </MiscProjectsItem>
                  ) : null}
                </div>
                <div
                  className={`${
                    visibleSection === "web" ? "" : "collapse"
                  } multi-collapse`}
                >
                  {visibleSection === "web" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center justify-center mt-5">
                      <ProjectButton
                        image={SISU}
                        title={"SISU"}
                        description={"Stick with something, see it through."}
                        url={"https://sisu.godhran.com/"}
                        skills={[
                          "react",
                          "html",
                          "js",
                          "css",
                          "github",
                          "cloudflare",
                        ]}
                      />
                      <ProjectButton underConstruction />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiscProjectsPanel;
