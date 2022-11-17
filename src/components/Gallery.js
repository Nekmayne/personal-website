import React from "react";
import "./Gallery.css";
import red17 from "../images/red17.jpg";
import red20 from "../images/red20.jpg";
import silver17 from "../images/silver17.jpg";
import green15 from "../images/green15.jpg";
import silver21 from "../images/silver21.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="gallery">
      <div className="container">
        <h1>Gallery</h1>
        <h3>
          This gallery is about displaying some of my most valueable disc golf
          discs
        </h3>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="pic-slider"
        >
          <div className="card">
            <img src={red17} alt="red17" />
            <p>Sexton Firebird 2017 - 300$</p>
          </div>

          <div className="card">
            <img src={red20} alt="red20" />
            <p>Sexton Firebird 2020 - 300$</p>
          </div>
          <div className="card">
            <img src={silver17} alt="silver20" />
            <p>Sexton Firebird 2017 - 300$</p>
          </div>
          <div className="card">
            <img src={green15} alt="green15" />
            <p>Sexton Firebird 2015 - 350$</p>
          </div>
          <div className="card">
            <img src={silver21} alt="silver21" />
            <p>Sexton Firebird 2021 - 80$</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
