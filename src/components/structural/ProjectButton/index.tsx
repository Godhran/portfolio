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
};

const ProjectButton = ({ image, title, description, url, skills }: Props) => {
  const { minimalMode } = usePortfolioContext();

  return (
    <Wrapper minimalMode={minimalMode}>
      <a href={url}>
        <img className="h-auto max-w-50" src={image} alt={`${title} logo`} />
      </a>
      <h5 className={"font-display lowercase font-bold"}>{title}</h5>
      <p className="inline-block italic">{description}</p>
      <div>
        {skills.map((skill: string) => (
          <FontAwesomeIcon
            key={`skill_${skill}`}
            icon={skillIcons[skill] as IconProp}
            color={minimalMode ? colours.minimal.dark : colours.vibrant.d}
            className="ms-2 mx-3 mt-3"
            size="2x"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectButton;
