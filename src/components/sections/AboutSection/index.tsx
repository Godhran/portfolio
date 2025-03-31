import React from "react";
import ImageInfoPanel from "../../structural/ImageInfoPanel";
import SelfPortrait from "../../animations/SelfPortrait";

const copy = {
  iDo: "I do",
  iDid: "I did",
  iDabble: "I dabble",
};

const iDo = [
  "JavaScript",
  "TypeScript",
  "React Native",
  "Accessibility",
  "GraphQL",
  "Jest",
  "Detox",
  "React",
  "Figma",
  "Miro",
  "Jira",
  "Agile",
];

const iDid = [
  "Photoshop",
  "Illustrator",
  "NodeJS",
  "Java",
  "Angular",
  "Ionic",
  "Firebase",
  "MongoDB",
  "Unity",
  "MySQL",
];

const iDabble = [
  "Voxels",
  "Pico8",
  "Tic-80",
  "Lottie",
  "AfterEffects",
  "Aesprite",
  "Godot",
  "Blender",
];
const section = "About";
const join = " ~ ";

const AboutSection = () => {
  return (
    <ImageInfoPanel
      animation={<SelfPortrait />}
      rightToLeft={false}
      section={section}
      content={[
        {
          title: copy.iDo,
          body: iDo.join(join),
        },
        {
          title: copy.iDid,
          body: iDid.join(join),
        },
        {
          title: copy.iDabble,
          body: iDabble.join(join),
        },
      ]}
    />
  );
};

export default AboutSection;
