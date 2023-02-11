import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../images/banner-one.jpg";
import Banner2 from "../../images/banner-two.jpg";
import Banner3 from "../../images/banner-three.jpg";
// import Button from "react-bootstrap/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="slider carousel slide carousel-fade">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h5>SPOTOGRAPHER</h5>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <a href="http://localhost:3000/#home" className="button">
              More about me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            <h5>SPOTOGRAPHER</h5>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <a href="http://localhost:3000/#home" className="button">
              More about me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
            <h5>SPOTOGRAPHER</h5>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <a href="http://localhost:3000/#home" className="button">
              More about me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
