import React from "react";
import { content } from "./RecentProjects.constants";
import { H3 } from "../../ui/typography/H3";
import { TimelinePeriod } from "../../ui/elements/TimelinePeriod/TimelinePeriod";
import { RecentProjectProps } from "./RecentProjects.types";
import { recentProjectsTestIDs } from "./RecentProjects.testIDs";

const testIds = {
  SectionContainer: "section-container",
  AnimationContainer: "animation-container",
  InformationContainer: "information-container",
  LeftToRight: "left-to-right",
  RightToLeft: "right-to-left",
};

export const RecentProjects = ({
  rightToLeft = false,
  animation,
  header,
  id,
  isAnimated = true,
}: RecentProjectProps) => {
  return (
    <section
      id={id}
      className="mt-5"
      data-testid={recentProjectsTestIDs.SectionContainer}
    >
      <div className="container py-4 py-xl-5 mx-auto px-0 md:px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
          <div
            className={`col ${rightToLeft ? "order-last" : "order-first"}`}
            data-aos={
              isAnimated ? (rightToLeft ? "fade-left" : "fade-right") : "none"
            }
            data-testid={recentProjectsTestIDs.AnimationContainer}
          >
            {animation}
          </div>
          <div
            className={"flex flex-col gap-0 flex align-content-center p-5"}
            data-aos={
              isAnimated ? (rightToLeft ? "fade-right" : "fade-left") : "none"
            }
            data-testid={recentProjectsTestIDs.InformationContainer}
          >
            {header ? <H3 className="text-start mb-3">{header}</H3> : null}

            {content.map(({ title, body, icon, links,skills },index) => {
              return <TimelinePeriod key={`timeline-item-${index}`} icon={icon} title={title} skills={skills} body={body} links={links}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
