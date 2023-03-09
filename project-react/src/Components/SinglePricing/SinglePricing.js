import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "../Button/Button";
import "./SinglePricing.css";

const SinglePricing = () => {
  return (
    <>
      <Col md={4}>
        <div className="single-pricing regular">
          <h3>Basic</h3>
          <div className="price-area">$750/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Directory Listings
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Structured Data
              </li>
              <li>
                <i class="fa-solid fa-square-xmark"></i>
                Content Audit
              </li>
              <li>
                <i class="fa-solid fa-square-xmark"></i>
                Website Maintenance
              </li>
              <li>
                <i class="fa-solid fa-square-xmark"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <Button btnName="Get Started" />
        </div>
      </Col>
      <Col md={4}>
        <div className="single-pricing popular">
          <h3>Premium</h3>
          <div class="ribbon">Popular</div>
          <div className="price-area">$1750/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Directory Listings
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Structured Data
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Content Audit
              </li>
              <li>
                <i class="fa-solid fa-square-xmark"></i>
                Website Maintenance
              </li>
              <li>
                <i class="fa-solid fa-square-xmark"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <Button btnName="Get Started" />
        </div>
      </Col>
      <Col md={4}>
        <div className="single-pricing regular">
          <h3>Ultimate</h3>
          <div className="price-area">$3,300/month</div>
          <div className="plan-area">
            <ul>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Full Website Audit
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Weekly Blogs
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Directory Listings
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Pagespeed Boost
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i> Structured Data
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Content Audit
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Website Maintenance
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                Marketing Dashboard
              </li>
            </ul>
          </div>
          <Button btnName="Get Started" />
        </div>
      </Col>
    </>
  );
};

export default SinglePricing;
