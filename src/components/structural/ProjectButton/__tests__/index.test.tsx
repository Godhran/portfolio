import { render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import React from "react";
import ProjectButton from "..";
import SISU from "../../../../assets/projects/SISU_FULL.png";

const testIds = {
  Container: "project-button-container",
  ImageLink: "project-button-image-link",
  Image: "project-button-image",
  Header: "project-button-header",
  Description: "project-button-description",
  SkillIcon: "project-button-skill-icon",
};

const testProps = {
  skills: ["react", "html", "js"],
  url: "www.odhran.fun",
  description: "Test Description",
  title: "Test Title",
  image: SISU,
};

const genericComponent = (
  <PortfolioProvider>
    <ProjectButton {...testProps} />
  </PortfolioProvider>
);

describe("ProjectButton", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.Container)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.ImageLink)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.Image)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.Header)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.Description)).toBeInTheDocument();
      expect(
        screen.getByTestId(`${testIds.SkillIcon}-${testProps.skills[0]}`)
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`${testIds.SkillIcon}-${testProps.skills[1]}`)
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`${testIds.SkillIcon}-${testProps.skills[2]}`)
      ).toBeInTheDocument();
    });

    describe("ImageLink", () => {
      test("Should navigate to the project link on press", () => {
        render(genericComponent);
        expect(screen.getByTestId(testIds.ImageLink)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.ImageLink)).toHaveAttribute(
          "href",
          testProps.url
        );
      });
    });
  });
});
