import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/junk-hauling-logo.png" 
            alt="Logo"
            width="60"
            height="55"
            className="d-inline-block align-top"
          />{" "}
          <span className="text-color">
          509 Junk Hauling
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ratesanddates">
              Rates and Dates
            </Nav.Link>
            <Nav.Link as={Link} to="/rentatrailer">
              Rent a Trailer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
