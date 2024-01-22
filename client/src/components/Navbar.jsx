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
          kly infra
        </a>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
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
