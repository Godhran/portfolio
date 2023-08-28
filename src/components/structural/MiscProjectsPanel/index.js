import React, { useState } from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import "./style.css";
import Gallery from "../Gallery";
import UnderConstruction from "../../animations/UnderConstruction";
import MiscProjectsItem from "../MiscProjectItem";
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
    // <section id="Misc" className="mt-5">
    //   <div className="container py-4 py-xl-5">
    //     <div className="row row-cols-1">
    //       <div
    //         className="col d-flex flex-column justify-content-center p-4 rounded"
    //         data-aos="zoom-in"
    //         style={styles.textPanel}
    //       >
    //         <div className="container">
    //           <div className="justify-content-between d-flex">
    //             <button
    //               className="btn btn-primary btn-light"
    //               type="button"
    //               onClick={() => {
    //                 setVisibleSection(visibleSection === "gallery" ? "" : "gallery");
    //               }}
    //               data-toggle="collapse"
    //               aria-expanded="false"
    //             >
    //               {visibleSection === "gallery" ? "Close" : "Gallery"}
    //             </button>
    //             <button
    //               className="btn btn-primary btn-light"
    //               type="button"
    //               onClick={() => {
    //                 setVisibleSection(visibleSection === "web" ? "" : "web");
    //               }}
    //               data-toggle="collapse"
    //               aria-expanded="false"
    //             >
    //               {visibleSection === "web" ? "Close" : "Web Apps"}
    //             </button>
    //           </div>
    //           <div className="row">
    //             <div
    //               className={`${
    //                 visibleSection === "gallery" ? "" : "collapse"
    //               } multi-collapse`}
    //             >
    //               {visibleSection === "gallery" ? (
    //                 <MiscProjectsItem>
    //                   <Gallery />
    //                 </MiscProjectsItem>
    //               ) : null}
    //             </div>
    //             <div
    //               className={`${
    //                 visibleSection === "web" ? "" : "collapse"
    //               } multi-collapse`}
    //             >
    //               {visibleSection === "web" ? (
    //                 <MiscProjectsItem animation="zoom-in">
    //                   <UnderConstruction />
    //                 </MiscProjectsItem>
    //               ) : null}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="Misc" className="mt-5">
      <div className="container py-4 xl:py-5 mx-auto">
        <div className="row row-cols-1">
          <div
            className="col flex flex-col justify-content-center p-4 md:rounded"
            data-aos="zoom-in"
            style={styles.textPanel}
          >
            <div className="container">
              <div className="grid grid-cols-2 gap-2 place-content-between">
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
                {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-sm justify-self-start"
                  type="button"
                  onClick={() => {
                    setVisibleSection(
                      visibleSection === "gallery" ? "" : "gallery"
                    );
                  }}
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  {visibleSection === "gallery" ? "Close" : "Gallery"}
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-xl justify-self-end"
                  type="button"
                  onClick={() => {
                    setVisibleSection(visibleSection === "web" ? "" : "web");
                  }}
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  {visibleSection === "web" ? "Close" : "Web Apps"}
                </button> */}
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
                    <MiscProjectsItem animation="zoom-in">
                      <UnderConstruction />
                    </MiscProjectsItem>
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
