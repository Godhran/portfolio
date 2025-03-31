import React, { useState } from "react";
import SISU from "../../../assets/projects/SISU_FULL.png";
import DCODE from "../../../assets/projects/DCODE_FULL.png";
import EMOJO from "../../../assets/projects/EMOJO_FULL.png";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import Gallery from "../Gallery";
import MiscProjectsItem from "../MiscProjectItem";
import ProjectButton from "../ProjectButton";
import { RoundedButton } from "./component.style";
import UnderConstruction from "../../animations/UnderConstruction";

const testIds = {
  GalleryButton: "misc-projects-panel-gallery-button",
  WebButton: "misc-projects-panel-web-button",
  ImageGallery: "misc-projects-panel-image-gallery",
  WebProjects: "misc-projects-panel-web-projects",
};

const copy = { close: "Close", gallery: "Gallery", web: "Web Apps" };

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
      <div className="container mx-auto">
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
                      visibleSection === copy.gallery ? "" : copy.gallery
                    );
                  }}
                  dataToggle="collapse"
                  ariaExpanded={false}
                  minimalMode={minimalMode}
                  testId={testIds.GalleryButton}
                  justifyStart
                >
                  {visibleSection === copy.gallery ? copy.close : copy.gallery}
                </RoundedButton>
                <RoundedButton
                  onClick={() => {
                    setVisibleSection(visibleSection === copy.web ? "" : copy.web);
                  }}
                  dataToggle="collapse"
                  ariaExpanded={false}
                  minimalMode={minimalMode}
                  testId={testIds.WebButton}
                >
                  {visibleSection === copy.web ? copy.close : copy.web}
                </RoundedButton>
              </div>
              <div className="row">
                <div
                  className={`${
                    visibleSection === copy.gallery ? "" : "collapse"
                  } multi-collapse`}
                >
                  {visibleSection === copy.gallery ? (
                    <MiscProjectsItem testId={testIds.ImageGallery}>
                      <Gallery />
                    </MiscProjectsItem>
                  ) : null}
                </div>
                <div
                  className={`${
                    visibleSection === copy.web ? "" : "collapse"
                  } multi-collapse`}
                >
                  {visibleSection === copy.web ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center justify-center mt-5" data-testid={testIds.WebProjects}>
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
                      <ProjectButton
                        image={DCODE}
                        title={"DCODE"}
                        description={"Guess the secret word"}
                        url={"https://dcode.godhran.com/"}
                        skills={[
                          "react",
                          "html",
                          "js",
                          "css",
                          "github",
                          "cloudflare",
                          "api",
                        ]}
                      />
                      <ProjectButton
                        image={EMOJO}
                        title={"eMojo"}
                        description={"Work out the mystery movie"}
                        url={"https://emojo.godhran.com/"}
                        skills={[
                          "react",
                          "html",
                          "js",
                          "css",
                          "github",
                          "cloudflare",
                          "api",
                        ]}
                      />
                      <UnderConstruction />
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
