import React from "react";
import Col from "react-bootstrap/esm/Col";

const Service = (props) => {
  return (
    <Col md={4}>
      <div className="single-service mt-4">
        <img src={props.image} className="w-100" alt=""></img>
        <div className="service-text p-3">
          <h4>{props.heading}</h4>
          <h5>Price: ${props.price}</h5>
          <p>{props.text}</p>
          <a href="http://localhost:3000/#home" className="button">
            Book now
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Service;
