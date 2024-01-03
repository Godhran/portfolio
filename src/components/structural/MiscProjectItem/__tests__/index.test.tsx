import React from "react";
import { render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import MiscProjectsItem from "..";

const testIds = {
  Container: "misc-projects-item-container",
  WebButton: "misc-projects-panel-web-button",
  ImageGallery: "misc-projects-panel-image-gallery",
  WebProjects: "misc-projects-panel-web-projects",
};

const genericComponent = (
  <PortfolioProvider>
    <MiscProjectsItem testId={testIds.Container}>
      <></>
    </MiscProjectsItem>
  </PortfolioProvider>
);

describe("MiscProjectsItem", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.Container)).toBeInTheDocument();
    });
  });
});
