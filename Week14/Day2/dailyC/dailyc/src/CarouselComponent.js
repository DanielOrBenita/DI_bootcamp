import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";
import img1 from "./assets/img-1.webp";
import img2 from "./assets/img-2.webp";
import img3 from "./assets/img-3.webp";
import img4 from "./assets/img-4.jpg";
import './CarouselComponent.css'

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;