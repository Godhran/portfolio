import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from "../../../context";
import { Wrapper } from "./component.style";
import { colours } from "../../../styles/colours";
import { skillIcons } from "../Section/skillIcons";
import UnderConstruction from "../../animations/UnderConstruction";

const ProjectButton = ({
  image,
  title,
  description,
  url,
  skills,
  underConstruction,
}) => {
  const { minimalMode } = usePortfolioContext();

  if (underConstruction) {
    return (
      <Wrapper minimalMode={minimalMode}>
        <div className="mb-3">
        <UnderConstruction />
        </div>

        <h5 className={"font-display lowercase font-bold"}>{'More to come'}</h5>
        <div className="inline-block italic">{'This section is getting more added to it as projects are cooked up'}</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper minimalMode={minimalMode}>
      <a href={url}>
        <img class="h-auto max-w-50" src={image} alt={`${title} logo`} />
      </a>
      <h5 className={"font-display lowercase font-bold"}>{title}</h5>
      <div className="inline-block italic">{description}</div>
      {skills.map((skill) => (
        <FontAwesomeIcon
          key={`skill_${skill}`}
          icon={skillIcons[skill]}
          color={minimalMode ? colours.minimal.dark : colours.vibrant.d}
          className="ms-2 mx-3 mt-3"
          size="2x"
        />
      ))}
    </Wrapper>
  );
};

export default ProjectButton;