import React from "react";
import { ProjectIcon } from "../../ui/iconography/ProjectIcon/ProjectIcon";
import { RecentProjectContent } from "./RecentProjects.types";

export const content: RecentProjectContent[] = [
  {
    title: "Bojji",
    skills: ["web"],
    body: "Accessibility Flow Tool (Alpha)",
    links: {
      web: "https://bojji.odhran.fun/",
    },
    icon: <ProjectIcon icon="bojji" />,
  },
  {
    title: "Trainline",
    skills: ["android", "apple"],
    body: "Great journeys start with Trainline",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=uk.co.eastmidlandsrailway.app&hl=en_GB",
      apple:
        "https://apps.apple.com/gb/app/emr-east-midlands-railway/id1472202499",
    },
    icon: <ProjectIcon icon="trainline" />,
  },
  {
    title: "Zopa",
    skills: ["android", "apple"],
    body: "Turning money on its head since 2005",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.zopa.zeos",
      apple: "https://apps.apple.com/gb/app/zopa-bank/id1324011914",
    },
    icon: <ProjectIcon icon="zopa" />,
  },
  {
    title: "Versus Arthritis",
    skills: ["android", "apple"],
    body: "A future free from arthritis",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.vsarthritis",
      apple:
        "https://apps.apple.com/us/app/arthritis-tracker-for-teens/id1483066694?ls=1",
    },
    icon: <ProjectIcon icon="versusArthritis" />,
  },
];
