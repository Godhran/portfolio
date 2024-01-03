import React from "react";
import { usePortfolioContext } from "../../../context";
import { Panel } from "./component.style";

type Props = {
  children: JSX.Element | JSX.Element[];
  animation?: string;
  testId?: string;
};

const MiscProjectsItem = ({
  children,
  animation = "fade-up",
  testId,
}: Props) => {
  const { minimalMode } = usePortfolioContext();

  return (
    <div className="container py-4 py-xl-5" data-testid={testId}>
      <div className="row row-cols-1">
        <Panel minimalMode={minimalMode} animation={animation}>
          <div className="container">{children}</div>
        </Panel>
      </div>
    </div>
  );
};

export default MiscProjectsItem;
