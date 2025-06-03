import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu when route changes (like on link click)
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Auto close if resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
