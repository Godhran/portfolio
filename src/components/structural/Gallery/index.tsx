import React from "react";
import { usePortfolioContext } from "../../../context";
import "./style.css";

import superMarioMap from "./../../../assets/images/1.png";
import ramenCart from "./../../../assets/images/2.png";
import car from "./../../../assets/images/3.png";
import kamisHouse from "./../../../assets/images/4.jpg";
import shieldTortoise from "./../../../assets/images/5.jpg";
import tank from "./../../../assets/images/6.gif";
import monkeyKing from "./../../../assets/images/7.png";
import namek from "./../../../assets/images/8.png";
import rocketLauncher from "./../../../assets/images/9.gif";
import tower from "./../../../assets/images/11.png";
import animalKnightsHeads from "./../../../assets/images/12.png";
import pirateBoats from "./../../../assets/images/13.jpg";
import cowOnTheMoon from "./../../../assets/images/19.png";
import spiritTrain from "./../../../assets/images/20.jpg";
import monsterInACrate from "./../../../assets/images/21.gif";
import vikingHeads from "./../../../assets/images/22.png";
import cabinInWoods from "./../../../assets/images/23.png";
import detectivePikachu from "./../../../assets/images/detective pikachu.png";
import mondoCool from "./../../../assets/images/mondocool.png";
import sixBullets from "./../../../assets/images/six bullets.png";
import woahYouGoBigGuy from "./../../../assets/images/woah you go.png";
import { GalleryWrapper } from "./component.style";

export const galleryImages = [
  {
    src: kamisHouse,
    altText: "Voxel model of Kami's house from Dragon Ball Z",
  },
  { src: ramenCart, altText: "Voxel model of a ramen cart" },
  { src: tank, altText: "Voxel model animation of a tank" },
  {
    src: rocketLauncher,
    altText: "Voxel model animation of a tank rocket launcher",
  },
  {
    src: monsterInACrate,
    altText: "Voxel model animation of a monster in a crate",
  },
  { src: cowOnTheMoon, altText: "Voxel model of a cow on the moon" },
  { src: superMarioMap, altText: "Voxel model of the Super Mario map" },
  {
    src: shieldTortoise,
    altText: "Voxel model of a shield in tortoise formation",
  },
  { src: car, altText: "Voxel model of a rabbit and a cat driving a car" },
  { src: monkeyKing, altText: "Voxel model of monkey king on a cloud" },
  {
    src: animalKnightsHeads,
    altText: "Voxel model of different animal heads wearing knight armour",
  },
  { src: pirateBoats, altText: "Voxel model of little pirate ships" },
  { src: namek, altText: "Voxel model of planet namek" },
  { src: tower, altText: "Voxel model of a tower" },
  { src: spiritTrain, altText: "Voxel model of the Spirit Train from Zelda" },
  { src: vikingHeads, altText: "Voxel model of a set of viking head emotions" },
  { src: cabinInWoods, altText: "Voxel model of a cabin in the woods" },
  {
    src: detectivePikachu,
    altText: "in badge design of Pikachu as a detective",
  },
  { src: mondoCool, altText: "Vector art of Vegeta from Dragon Ball Z" },
  {
    src: sixBullets,
    altText: "Pin badge design of Six Bullets from JoJos Bizarre Adventure",
  },
  { src: woahYouGoBigGuy, altText: "Vector art of a mexican wrestler" },
];

type Props = {
  animation?: string;
};

const testIds = {
  Container: "gallery-container",
  Image: "gallery-image",
};

const Gallery = ({ animation = "fade-up" }: Props) => {
  const { minimalMode } = usePortfolioContext();

  return (
    <GalleryWrapper animation={animation} minimalMode={minimalMode}>
      <div className="gallery" data-testid={testIds.Container}>
        {galleryImages.map((image, index) => {
          const { src, altText } = image;
          return (
            <div className="mb-3" key={`gallery_image_${index}`}>
              <a href={src}>
                <img
                  className="img-fluid rounded"
                  src={src}
                  alt={altText}
                  data-testid={`${testIds.Image}-${index}`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
