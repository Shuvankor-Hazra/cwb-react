import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import Logo from "../../Images/logo.png";
// import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  //   Sign Out
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header-area">
      <Navbar expand="lg" className="nav-bar fixed-top">
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link ms-4">
                <i className="fa-solid fa-house-user me-1"></i>Home
              </NavLink>
              <NavLink to="/about" className="nav-link ms-4">
                <i className="fa-solid fa-circle-info me-1"></i>About
              </NavLink>
              <NavLink to="/blog" className="nav-link ms-4">
                <i className="fa-solid fa-blog me-1"></i>Blog
              </NavLink>
              {user ? (
                <NavLink
                  btnName="Sign Out"
                  className="btn-link"
                  onClick={handleSignOut}
                >
                  Sign Out
                </NavLink>
              ) : (
                <NavLink as="Link" to="/signin" className="btn-link">
                  Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
