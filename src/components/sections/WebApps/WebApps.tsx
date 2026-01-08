import React from "react";
import { Apps } from "./WebApps.constants";
import { SVGIcon } from "../../ui/iconography/SVGIcon/SVGIcon";
import UnderConstruction from "../../animations/UnderConstruction/UnderConstruction";
import { title } from "./WebApps.copy";
import { H3 } from "../../ui/typography/H3";
import { H4 } from "../../ui/typography/H4";
import { Link } from "react-router-dom";

export const WebApps = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container mx-auto py-5 px-4 xs:px-0">
      <H3>{title}</H3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Apps.map(({ image, title, description, url, skills }) => {
          return (
            <Link
              to={url}
              className="flex flex-col rounded-xl p-4 md:p-6 bg-white"
              target="_blank"
              rel="noreferrer"
              key={title}
            >
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded size-20 h-24 w-24"
                  src={image}
                  alt={title}
                />
                <div className="grow">
                  <H4 className="text-center">{title}</H4>
                  <p className="text-xs uppercase text-center">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-3 space-x-1 flex row justify-center gap-x-2">
                {skills.map((skill,index) => (
                  <SVGIcon key={`skill-icon-${index}`} icon={skill} />
                ))}
              </div>
            </Link>
          );
        })}

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white">
            <UnderConstruction />
          </div>
        </div>
      </div>
    </section>
  );
};
