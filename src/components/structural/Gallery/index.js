import React from "react";
import { usePortfolioContext } from "../../../context";
import { colours } from "../../../styles/colours";
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

const Gallery = ({ animation = "fade-up" }) => {
  const { minimalMode } = usePortfolioContext();

  const styles = {
    textPanel: {
      backgroundColor: !minimalMode ? colours.vibrant.a : colours.minimal.dark,
      color: !minimalMode ? colours.vibrant.light : colours.minimal.light,
    },
    link: {
      color: !minimalMode ? colours.vibrant.f : colours.minimal.accent,
    },
    linkIcon: {
      color: !minimalMode ? colours.vibrant.c : colours.minimal.accent,
    },
  };

  return (
    <div className="container py-4 py-xl-5">
      <div className="row row-cols-1">
        <div
          className="col d-flex flex-column justify-content-center p-4 rounded"
          data-aos={animation}
          style={styles.textPanel}
        >
          <div className="container">
            <div className="gallery" id="gallery">
              {images.map((image) => (
                <div className="mb-3 pics animation all 2">
                  <a href={image}>
                    <img className="img-fluid rounded" src={image} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
