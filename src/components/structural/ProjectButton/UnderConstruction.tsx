import React from "react";
import { usePortfolioContext } from "../../../context";
import UnderConstruction from "../../animations/UnderConstruction";
import { Wrapper } from "./component.style";

const ProjectUnderConstruction = () => {
  const { minimalMode } = usePortfolioContext();

  return (
    <Wrapper minimalMode={minimalMode}>
      <UnderConstruction />
    </Wrapper>
  );
};

export default ProjectUnderConstruction;
