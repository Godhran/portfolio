import React from "react";
import { usePortfolioContext } from "../../../context";
import UnderConstruction from "../../animations/UnderConstruction";
import { Wrapper } from "./component.style";

const ProjectUnderConstruction = () => {
  const { minimalMode } = usePortfolioContext();

  return (
    <Wrapper minimalMode={minimalMode}>
      <h3 className={"font-display text-xl lowercase font-bold mt-5"}>
        {"More to come"}
      </h3>
      <UnderConstruction />
      <div className="inline-block italic mb-5">
        {"This section is getting more added to it as projects are cooked up"}
      </div>
    </Wrapper>
  );
};

export default ProjectUnderConstruction;
