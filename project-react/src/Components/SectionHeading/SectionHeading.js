import React from "react";
import "./SectionHeading.css";

const Heading = ({ heading, span, subHeading }) => {
  return (
    <div className="section-heading text-center">
      <h2>
        {heading} <span>{span}</span>
      </h2>
      <p>{subHeading}</p>
    </div>
  );
};

export default Heading;
