import React from "react";
import { galleryImages } from "./Gallery.constants";
import { shuffle } from "./Gallery.utils";
import { GaleryColumn } from "./Gallery.elements";
import { H3 } from "../../ui/typography/H3";
import { SVGIcon } from "../../ui/iconography/SVGIcon/SVGIcon";

export const MasonryGallery = ({ id }: { id: string }) => {
  const length = galleryImages.length;
  const images = shuffle(galleryImages);

  const [showGallery, setShowGallery] = React.useState<boolean>(false);

  const handleGalleryVisiblity = () => {
    setShowGallery(!showGallery);
  };

  return (
    <section id={id} className="container mx-auto py-5 px-4 xs:px-0">
      <div
        onClick={handleGalleryVisiblity}
        role="button"
        className="cursor-pointer flex flex-row  justify-start items-center content-center gap-4 mb-3 select-none"
      >
        <SVGIcon icon={showGallery ? "eye-closed" : "eye-open"} />

        <H3 className="flex flex-row justify-start items-center content-center gap-4 !text-center !mb-0">
          {`${showGallery ? "Hide These" : "See Some"} Odds 'n' Ends`}
        </H3>
        <SVGIcon icon={showGallery ? "eye-closed" : "eye-open"} />
      </div>
      {showGallery && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          <GaleryColumn images={images} length={length} index={0} />
          <GaleryColumn images={images} length={length} index={1} />
          <GaleryColumn images={images} length={length} index={2} />
          <GaleryColumn images={images} length={length} index={3} />
        </div>
      )}
    </section>
  );
};
