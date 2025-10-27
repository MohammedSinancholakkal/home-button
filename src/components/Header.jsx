import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/Header.css";
import hero1 from "../assets/heroLogo1.png";

function Header({ searchQuery, setSearchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // ✅ Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        expanded &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
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
      <section className="container-fluid d-flex align-items-center">
        
        {/* Brand */}
        <Navbar.Brand className="brand-glow">
          <img src={hero1} alt="Logo" />
        </Navbar.Brand>

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
              end
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              end
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>

           

            <NavLink
              to="/products"
              end
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/aboutus"
              end
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contactus"
              end
              className={({ isActive }) =>
                `nav-link-glow ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </section>
    </Navbar>
  );
}

export default Header;
