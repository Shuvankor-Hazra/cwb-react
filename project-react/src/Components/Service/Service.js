import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./Service.css";

const Service = ({ item }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="single-item text-center my-4">
        <div className="image">
          <img src={item.img} alt="" className="w-100"></img>
        </div>
        <div className="details">
          <h3>{item.h3}</h3>
          <p>{item.p}</p>
          <a href="/">{item.btn}</a>
        </div>
      </div>
    </Col>
  );
};

export default Service;
