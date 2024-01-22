import "./Navbar.css";
import React, { useState } from "react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const mobileMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <a href="#" className="nav-logo">
          <img src={logo} alt="" className="nav-logo" />
        </a>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={mobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
