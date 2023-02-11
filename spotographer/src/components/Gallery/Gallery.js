import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Gallery1 from "../../images/gallery-one.jpg";
import Gallery2 from "../../images/gallery-two.jpg";
import Gallery3 from "../../images/gallery-three.jpg";
import Gallery4 from "../../images/gallery-four.jpg";
import Gallery5 from "../../images/gallery-five.jpg";
import Gallery6 from "../../images/gallery-six.jpg";
import Gallery7 from "../../images/gallery-seven.jpg";
import Gallery8 from "../../images/gallery-eight.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-area">
      <Container>
        <h2 className="text-center mb-5">Some Moments</h2>
        <Row>
          <Col md={3}>
            <img src={Gallery1} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery2} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery3} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery4} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery5} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery6} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery7} alt="" className="w-100 my-3"></img>
          </Col>
          <Col md={3}>
            <img src={Gallery8} alt="" className="w-100 my-3"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
