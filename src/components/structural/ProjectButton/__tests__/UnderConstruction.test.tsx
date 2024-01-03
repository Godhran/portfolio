import { render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import React from "react";
import UnderConstruction from "../UnderConstruction";

const testIds = {
  Container: "project-under-construction-container",
};

const genericComponent = (
  <PortfolioProvider>
    <UnderConstruction />
  </PortfolioProvider>
);

describe("UnderConstruction", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.Container)).toBeInTheDocument();
    });
  });
});
