import React from "react";
import { AppLinkIconButton } from "../../iconography/AppLinkIconButton/AppLinkIconButton";
import { RecentProjectContent } from "../../../sections/RecentProjects/RecentProjects.types";
import { Link } from "react-router-dom";

export const TimelinePeriod = ({
  title,
  body,
  icon,
  links,
}: RecentProjectContent) => {
  return (
    <div className="group relative flex">
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-3 after:w-px after:-translate-x-[-100%] after:bg-transparent after:border-dotted after:border-4 after:border-black after:border-r-0 after:border-b-0 after:border-t-0 ">
        <div className="relative z-10 flex justify-center items-center">
          {icon && icon}{" "}
        </div>
      </div>
      <div className="grow pb-8 group-last:pb-0 px-5">
        <p
          className="font-semibold text-sm text-gray-800"
          style={{
            fontFamily: "Major Mono Display",
            textTransform: "lowercase",
          }}
        >
          {title}
        </p>

        <p className="mt-1 text-sm text-gray-600 italic">{body}</p>

        <div className="flex row gap-4 mt-4 justify-center">
          {links?.apple && (
            <Link to={links.apple}>
              <AppLinkIconButton />
            </Link>
          )}
          {links?.android && (
            <Link to={links.android}>
              <AppLinkIconButton isAndroid={true} />
            </Link>
          )}
          {links?.web && (
            <Link to={links.web}>
              <AppLinkIconButton isWeb={true} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
