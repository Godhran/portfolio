import React from "react";
import { usePortfolioContext } from "../../../context";
import UnderConstruction from "../../animations/UnderConstruction";
import { Wrapper } from "./component.style";

const testIds = {
  Container: "project-under-construction-container",
};

const ProjectUnderConstruction = () => {
  const { minimalMode } = usePortfolioContext();

  return (
    <Wrapper
      minimalMode={minimalMode}
      testId={testIds.Container}
    >
      <UnderConstruction />
    </Wrapper>
  );
};

export default ProjectUnderConstruction;
