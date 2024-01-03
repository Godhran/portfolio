import React from "react";
import { render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import Gallery, { galleryImages } from "..";

const testIds = {
  Container: "gallery-container",
  Image: "gallery-image",
};

const genericComponent = (
  <PortfolioProvider>
    <Gallery />
  </PortfolioProvider>
);

describe("Gallery", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.Container)).toBeInTheDocument();
    });
    
    test("Should render all of the images", () => {
      render(genericComponent);

      expect(screen.getByTestId(testIds.Container).childNodes).toHaveLength(galleryImages.length)
      galleryImages.map((image, index) => {
        expect(
          screen.getByTestId(`${testIds.Image}-${index}`)
        ).toBeInTheDocument();
        return null;
      });
    });
  });
});
