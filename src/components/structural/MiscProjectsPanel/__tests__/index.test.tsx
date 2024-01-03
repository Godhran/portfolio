import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import MiscProjectsPanel from "..";

const testIds = {
  GalleryButton: "misc-projects-panel-gallery-button",
  WebButton: "misc-projects-panel-web-button",
  ImageGallery: "misc-projects-panel-image-gallery",
  WebProjects: "misc-projects-panel-web-projects",
};

const copy = { close: "Close", gallery: "Gallery", web: "Web Apps" };

const genericComponent = (
  <PortfolioProvider>
    <MiscProjectsPanel />
  </PortfolioProvider>
);

describe("MiscProjectsPanel", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.GalleryButton)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.WebButton)).toBeInTheDocument();
      expect(screen.getByText(copy.gallery)).toBeInTheDocument();
      expect(screen.getByText(copy.web)).toBeInTheDocument();
      expect(screen.queryByText(copy.close)).not.toBeInTheDocument();
      expect(screen.queryByTestId(testIds.ImageGallery)).not.toBeInTheDocument();
      expect(screen.queryByTestId(testIds.WebProjects)).not.toBeInTheDocument();
    });

    describe("Gallery", () => {
      test("Should show the images gallery on button click", () => {
        render(genericComponent);
        expect(screen.getByTestId(testIds.GalleryButton)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.WebButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testIds.GalleryButton));
        expect(screen.getByTestId(testIds.ImageGallery)).toBeInTheDocument();
        expect(screen.queryByTestId(testIds.WebProjects)).not.toBeInTheDocument();
      });

      test(`Should change button label from '${copy.gallery}' to '${copy.close}' on click`, () => {
        render(genericComponent);
        expect(screen.getByTestId(testIds.GalleryButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testIds.GalleryButton));
        expect(screen.queryByText(copy.gallery)).not.toBeInTheDocument();
        expect(screen.getByText(copy.web)).toBeInTheDocument();
        expect(screen.getByText(copy.close)).toBeInTheDocument();
      });
    });

    describe("Web", () => {
      test("Should show the web projects on button click", () => {
        render(genericComponent);
        expect(screen.getByTestId(testIds.WebButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testIds.WebButton));
        expect(screen.getByTestId(testIds.WebProjects)).toBeInTheDocument();
        expect(screen.queryByTestId(testIds.ImageGallery)).not.toBeInTheDocument();
  
      });

      test(`Should change button label from '${copy.web}' to '${copy.close}' on click`, () => {
        render(genericComponent);
        expect(screen.getByTestId(testIds.WebButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testIds.WebButton));
        expect(screen.queryByText(copy.web)).not.toBeInTheDocument();
        expect(screen.getByText(copy.gallery)).toBeInTheDocument();
        expect(screen.getByText(copy.close)).toBeInTheDocument();
      });
    });
  });
});
