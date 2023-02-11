import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area text-center bg-dark variant-bark py-4">
      <img src={Logo} alt="" className="my-4"></img>
      <p className="text-white">© 2022 Spotographer, All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
