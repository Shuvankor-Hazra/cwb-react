import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Service from "../Service/Service";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";

const Servises = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services-area">
      <Container>
        <SectionHeading
          heading="OUR BEST"
          span="SERVICES"
          subHeading="Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Servises;
