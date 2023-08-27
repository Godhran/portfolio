import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillIcons } from "./skillIcons";

const Section = ({ title, skills, button, onClick }) => {
  const { minimalMode } = usePortfolioContext();

  const styles = {
    section: {
      textAlign: "center",
      backgroundColor: minimalMode ? colours.minimal.dark : colours.vibrant.d,
      fontFamily: "Major Mono Display",
      textTransform: "lowercase",
      fontWeight: "bold",
    },
    arch: {
      backgroundColor: minimalMode
        ? colours.minimal.light
        : colours.vibrant.light,
      padding: "2em",
    },
    h2: {
      color: minimalMode ? colours.minimal.light : colours.vibrant.light,
    },
  };

  return (
    <>
      <section className="width-100" style={styles.section} id={title}>
        <div
          className={`curved-wrapper ${minimalMode ? "straight" : "curved-bottom"}`}
          style={styles.arch}
        />

        <div className="p-3 py-5 p-md-5 ">
          <h2 style={styles.h2}>{title}</h2>
          <div className="my-3 my-md-5">
            {skills.map((skill) => (
              <FontAwesomeIcon
                key={`skill_${skill}`}
                icon={skillIcons[skill]}
                color={
                  minimalMode ? colours.minimal.light : colours.vibrant.light
                }
                className="ms-2 mx-3"
                size="2x"
              />
            ))}
          </div>
          {button ? (
            <button onClick={onClick} className="btn btn-light btn-sm">
              {button}
            </button>
          ) : null}
        </div>
        <div
          className={`curved-wrapper ${minimalMode ? "straight" : "curved-top"}`}
          style={styles.arch}
        />
      </section>
    </>
  );
};

export default Section;
