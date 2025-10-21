import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import "../styles/Header.css";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // ✅ Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (expanded && navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [expanded]);

  // ✅ Close navbar after navigation
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      ref={navRef}
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-header px-4"
    >
      <section className="container-fluid d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Navbar.Brand className="brand-glow">Home Button</Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Portfolio
            </NavLink>
          </Nav>

          {/* Right-side buttons */}
          <div className="ms-auto d-flex gap-2 justify-content-center flex-wrap mt-3 mt-lg-0">
            <Button variant="info" className="btn-glow text-light">
              <i className="fa-solid fa-globe"></i>
            </Button>
          </div>
        </Navbar.Collapse>
      </section>
    </Navbar>
  );
}

export default Header;
