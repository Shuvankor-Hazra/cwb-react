import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Logo from "../../Images/logo.png";
import Button from "../Button/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-top">
          <Row>
            <Col lg={6} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={7} md={6} sm={12} className="footer-column">
                  <div className="about-footer">
                    <div className="logo mb-4">
                      <a href="/project-react">
                        <img src={Logo} alt=""></img>
                      </a>
                    </div>
                    <div className="text">
                      Jackcerra is a full-service business firm with record of
                      winning many campaigns under challenging circumstances.
                    </div>
                    <div className="newsletter-form">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value=""
                          placeholder="Email Address"
                          required=""
                        ></input>
                        <button type="submit">
                          <i class="fa-regular fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={6} sm={12} className="footer-column">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul className="links">
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/">Team Member</a>
                      </li>
                      <li>
                        <a href="/">Services</a>
                      </li>
                      <li>
                        <a href="/">Contact Us</a>
                      </li>
                      <li>
                        <a href="/">Hire us</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={6} md={6} sm={12} className="footer-column">
                  <div className="footer-links">
                    <h4>Sub Pages</h4>
                    <ul className="links">
                      <li>
                        <a href="/">Conditions</a>
                      </li>
                      <li>
                        <a href="/">Customer Care</a>
                      </li>
                      <li>
                        <a href="/">Support Team</a>
                      </li>
                      <li>
                        <a href="/">FAQ Support</a>
                      </li>
                      <li>
                        <a href="/">Terms & Policy</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="footer-column">
                  <div className="footer-links">
                    <h4>Contact Us</h4>
                    <ul className="contact-list">
                      <li>
                        <span>
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        <a href="tel:+8801741846653">(+880) 1741-836-653</a>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <a href="mailto:shuvo.s.ovuhs@gmail.com">
                          shuvo.s.ovuhs@gmail.com
                        </a>
                      </li>
                      <li>
                        <span>
                          <i class="fa-solid fa-location-dot"></i>
                        </span>
                        <a href="/">
                          9440, Satkhira, Khulna, <br />
                          Dhaka, Bangladesh
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="copyright">
                © 2023
                <a href="/project-react"> BDash</a>, All Rights Reserved
              </div>
            </div>
            <div className="right-box d-flex">
              <ul className="social-box">
                <li>
                  <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i class="fa-brands fa-square-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <div className="language">
                <Button className="btn-link" btnName="English (US)" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
