import React from "react";
import "./Button.css";

const Button = ({ btnName }) => {
  return <button className="btn-link">{btnName}</button>;
};

export default Button;
