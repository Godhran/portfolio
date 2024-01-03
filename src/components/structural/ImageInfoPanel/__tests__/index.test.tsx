import ImageInfoPanel from "..";
import { render, screen } from "@testing-library/react";
import { PortfolioProvider } from "../../../../context";
import React from "react";

const testIds = {
  SectionContainer: "image-info-panel-section-container",
  AnimationContainer: "image-info-panel-animation-container",
  InformationContainer: "image-info-panel-information-container",
  LeftToRight: "left-to-right",
  RightToLeft: "right-to-left",
};

const copy = {
  sectionHeader: "Section Header",
  sectionID: "SectionComponent",
  contentTitle: "Test Title",
  contentBody: "Test Body",
};

const testProps = {
  animation: <></>,
  rightToLeft: false,
  header: copy.sectionHeader,
  section: copy.sectionID,
  content: [
    {
      title: copy.contentTitle,
      body: copy.contentBody,
    },
  ],
};

const genericComponent = (
  <PortfolioProvider>
    <ImageInfoPanel {...testProps} />
  </PortfolioProvider>
);

describe("ImageInfoPanel", () => {
  describe("Basic Render", () => {
    test("Should render the basic elements of the component", () => {
      render(genericComponent);
      expect(screen.getByTestId(testIds.SectionContainer)).toBeInTheDocument();
      expect(screen.getByTestId(testIds.SectionContainer)).toHaveAttribute(
        "id",
        copy.sectionID
      );
      expect(
        screen.getByTestId(
          `${testIds.AnimationContainer}-${testIds.LeftToRight}`
        )
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(
          `${testIds.InformationContainer}-${testIds.LeftToRight}`
        )
      ).toBeInTheDocument();
      expect(screen.getByText(copy.sectionHeader)).toBeInTheDocument();
    });

    test("Should render the correct content", () => {
      render(genericComponent);
      expect(screen.getByText(copy.contentTitle)).toBeInTheDocument();
      expect(screen.getByText(copy.contentBody)).toBeInTheDocument();
    });

    describe("Props", () => {
      describe("Right to Left", () => {
        describe("Enabled", () => {
          test("Should render the right to left container", () => {
            render(
              <PortfolioProvider>
                <ImageInfoPanel {...testProps} rightToLeft={true} />
              </PortfolioProvider>
            );
            expect(
              screen.getByTestId(
                `${testIds.AnimationContainer}-${testIds.RightToLeft}`
              )
            ).toBeInTheDocument();
            expect(
              screen.getByTestId(
                `${testIds.InformationContainer}-${testIds.RightToLeft}`
              )
            ).toBeInTheDocument();
          });
        });

        describe("Disabled", () => {
          test("Should render the left to right container", () => {
            render(
              <PortfolioProvider>
                <ImageInfoPanel {...testProps} rightToLeft={false} />
              </PortfolioProvider>
            );
            expect(
              screen.getByTestId(
                `${testIds.AnimationContainer}-${testIds.LeftToRight}`
              )
            ).toBeInTheDocument();
            expect(
              screen.getByTestId(
                `${testIds.InformationContainer}-${testIds.LeftToRight}`
              )
            ).toBeInTheDocument();
          });
        });
      });

      describe("isAnimated", () => {
        describe("Enabled", () => {
          test("Should render the components without an animation", () => {
            render(
              <PortfolioProvider>
                <ImageInfoPanel {...testProps} isAnimated={true} />
              </PortfolioProvider>
            );
            expect(
              screen.getByTestId(
                `${testIds.AnimationContainer}-${testIds.LeftToRight}`
              )
            ).toHaveAttribute("data-aos", "fade-right");
            expect(
              screen.getByTestId(
                `${testIds.InformationContainer}-${testIds.LeftToRight}`
              )
            ).toHaveAttribute("data-aos", "fade-left");
          });
        });

        describe("Disabled", () => {
          test("Should render the components with an animation", () => {
            render(
              <PortfolioProvider>
                <ImageInfoPanel {...testProps} isAnimated={false} />
              </PortfolioProvider>
            );
            expect(
              screen.getByTestId(
                `${testIds.AnimationContainer}-${testIds.LeftToRight}`
              )
            ).toHaveAttribute("data-aos", "none");
            expect(
              screen.getByTestId(
                `${testIds.InformationContainer}-${testIds.LeftToRight}`
              )
            ).toHaveAttribute("data-aos", "none");
          });
        });
      });
    });
  });
});
