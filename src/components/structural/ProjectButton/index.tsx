import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from "../../../context";
import { Wrapper } from "./component.style";
import { colours } from "../../../styles/colours";
import { skillIcons } from "../Section/skillIcons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  skills: string[];
  url: string;
  description: string;
  title: string;
  image: string;
  testId?: string;
};

const testIds = {
  Container: "container",
  ImageLink: "image-link",
  Image: "image",
  Header: "header",
  Description: "description",
  SkillIcon: "skill-icon",
};

const ProjectButton = ({
  image,
  title,
  description,
  url,
  skills,
  testId = "project-button",
}: Props) => {
  const { minimalMode } = usePortfolioContext();

  return (
    <Wrapper
      minimalMode={minimalMode}
      testId={`${testId}-${testIds.Container}`}
    >
      <a href={url} data-testid={`${testId}-${testIds.ImageLink}`}>
        <img
          className="h-auto max-w-50"
          src={image}
          alt={`${title} logo`}
          data-testid={`${testId}-${testIds.Image}`}
        />
      </a>
      <h5
        className={"font-display lowercase font-bold"}
        data-testid={`${testId}-${testIds.Header}`}
      >
        {title}
      </h5>
      <p
        className="inline-block italic"
        data-testid={`${testId}-${testIds.Description}`}
      >
        {description}
      </p>
      <div className="flex-row flex flex-wrap justify-center">
        {skills.map((skill: string) => (
          <div
            className="ms-2 mx-3 mt-3"
            data-testid={`${testId}-${testIds.SkillIcon}-${skill}`}
          >
            <FontAwesomeIcon
              key={`skill_${skill}`}
              icon={skillIcons[skill] as IconProp}
              color={minimalMode ? colours.minimal.dark : colours.vibrant.d}
              size="2x"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectButton;
