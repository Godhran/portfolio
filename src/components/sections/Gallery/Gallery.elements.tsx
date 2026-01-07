import React from "react";
import { GalleryColumnProps } from "./Gallery.types";
import { Link } from "react-router-dom";

export const GaleryColumn = ({ images, length, index }: GalleryColumnProps) => {
  const start = Math.floor(length / 4) * index;
  const end = Math.floor(length / 4) * (index + 1);

  return (
    <div className="space-y-2 flex flex-col">
      {images.slice(start, end).map(({ src, altText }) => {
        return (
          <Link to={src} target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-auto object-cover rounded"
              src={src}
              alt={altText}
            />
          </Link>
        );
      })}
    </div>
  );
};
