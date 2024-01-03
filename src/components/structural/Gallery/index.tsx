import React from "react";
import { usePortfolioContext } from "../../../context";
import "./style.css";

import one from "./../../../assets/images/1.png";
import two from "./../../../assets/images/2.png";
import three from "./../../../assets/images/3.png";
import four from "./../../../assets/images/4.jpg";
import five from "./../../../assets/images/5.jpg";
import six from "./../../../assets/images/6.gif";
import seven from "./../../../assets/images/7.png";
import eight from "./../../../assets/images/8.png";
import nine from "./../../../assets/images/9.gif";
import ten from "./../../../assets/images/11.png";
import eleven from "./../../../assets/images/12.png";
import twelve from "./../../../assets/images/13.jpg";
import thirteen from "./../../../assets/images/19.png";
import fourteen from "./../../../assets/images/20.jpg";
import fifteen from "./../../../assets/images/21.gif";
import sixteen from "./../../../assets/images/22.png";
import seventeen from "./../../../assets/images/23.png";
import eighteen from "./../../../assets/images/detective pikachu.png";
import nineteen from "./../../../assets/images/mondocool.png";
import twenty from "./../../../assets/images/six bullets.png";
import twentyone from "./../../../assets/images/woah you go.png";
import { GalleryWrapper } from "./component.style";

const images = [
  four,
  two,
  six,
  nine,
  twentyone,
  nineteen,
  one,
  five,
  three,
  fifteen,
  eight,
  eighteen,
  ten,
  twelve,
  fourteen,
  seven,
  sixteen,
  eleven,
  thirteen,
  seventeen,
  twenty,
];

type Props = {
  animation?: string,
};

const Gallery = ({ animation = "fade-up" }: Props) => {
  const { minimalMode } = usePortfolioContext();

  return (
    <GalleryWrapper animation={animation} minimalMode={minimalMode}>
      <div className="gallery">
        {images.map((image) => (
          <div className="mb-3">
            <a href={image}>
              <img className="img-fluid rounded" src={image} alt="" />
            </a>
          </div>
        ))}
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
