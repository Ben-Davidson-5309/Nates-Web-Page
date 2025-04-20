import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you copy the CSS into this file

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src="/junk-hauling-logo.png"
              alt="Logo"
              width="60"
              height="60"
            />
          </Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className={`nav-menu ${menuOpen ? "" : "hide"}`}>
          <Link to="/ratesanddates">Rates and Dates</Link>
          <Link to="/rentatrailer">Rent a Trailer</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Info</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;