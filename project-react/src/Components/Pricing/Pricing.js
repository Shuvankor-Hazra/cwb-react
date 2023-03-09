import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import SinglePricing from "../SinglePricing/SinglePricing";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-area">
      <Container>
        <Row>
          <SectionHeading
            heading="Our best"
            span="Pricing Plan"
            subHeading="Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <SinglePricing />
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
