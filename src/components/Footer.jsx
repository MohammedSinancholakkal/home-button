import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <section className="container">
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="footer-title">Home Button Tech Pvt Ltd</h4>
            <p className="footer-text">
              We provide customised, reliable and cost effective solutions for
              all your business needs.
            </p>
            <div className="social-icons">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          <Col md={2}>
  <h5 className="footer-subtitle">Useful Links</h5>
  <ul className="footer-links">
    <li>
      <i className="bi bi-chevron-right"></i><a href="/">Home</a>
    </li>
    <li>
      <i className="bi bi-chevron-right"></i><a href="/services">Services</a>
    </li>
    <li>
      <i className="bi bi-chevron-right"></i><a href="/aboutus">About Us</a>
    </li>
    <li>
      <i className="bi bi-chevron-right"></i><a href="/products">Products</a>
    </li>
    <li>
      <i className="bi bi-chevron-right"></i><a href="/contactus">Contact</a>
    </li>
  </ul>
</Col>



<Col md={2}>
  <h5 className="footer-subtitle">Our Services</h5>
  <ul className="footer-links">
    <li>
    <i className="bi bi-chevron-right"></i>
      <Link to="/services#software-section-insight">ERP Software</Link>
    </li>
    <li>
    <i className="bi bi-chevron-right"></i>
      <Link to="/services#software-section-insight">CRM Software</Link>
    </li>
    <li>
    <i className="bi bi-chevron-right"></i>
      <Link to="/services#software-section-insight">Salesforce Customisation</Link>
    </li>
    <li>
    <i className="bi bi-chevron-right"></i>
      <Link to="/services#software-section-insight">Custom Software for Business</Link>
    </li>
  </ul>
</Col>

          <Col md={4}>
            <h5 className="footer-subtitle">Contact Us</h5>
            <p className="footer-contact-item">
            <i className="fa-solid fa-location-dot"></i>
            No 24/1701, Suit No: 821, Heiley offices <br />
            2nd floor KC Arcade, Near TV center, <br />
            CSEZ P.O, Kakkanad, Eranakulam - 682037
          </p>

          <p className="footer-contact-item">
            <i className="fa-solid fa-mobile-screen-button"></i>
            +91 9629794999
          </p>

          <p className="footer-contact-item ms-1">
            <i className="bi bi-telephone"></i>
            +91 484-2977886
          </p>

          <p className="footer-contact-item ms-1">
            <i className="bi bi-envelope"></i>
            homebuttonpvtltd@gmail.com
          </p>

          </Col>
        </Row>

        <div className="footer-bottom text-center mt-4">
          <p>
            © Copyright <span>Home Button Tech. Pvt .Ltd</span>. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
