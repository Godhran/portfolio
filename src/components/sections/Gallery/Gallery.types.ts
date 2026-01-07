export type GalleryImages = {
  src: string;
  altText: string;
};

export type GalleryColumnProps = {
  images: GalleryImages[];
  length: number;
  index: number;
};
