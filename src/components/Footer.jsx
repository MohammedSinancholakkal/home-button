import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="footer-title">Home Button Pvt Ltd</h4>
            <p className="footer-text">
            We provide customised, reliable and cost effective solutions for all your business needs.
            </p>
            <div className="social-icons">
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>

          <Col md={2}>
            <h5 className="footer-subtitle">Useful Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contactus">Contact</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer-subtitle">Our Services</h5>
            <ul className="footer-links">
              <li><Link to="/services#software-section-insight">ERP Software</Link></li>
              <li><Link to="/services#software-section-insight">CRM Software</Link></li>
              <li><Link to="/services#software-section-insight">Salesforce Customisation</Link></li>
              <li><Link to="/services#software-section-insight">Custom Software for Business</Link></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer-subtitle">Contact Us</h5>
            <p className="footer-contact">
              No 24/1701, Suit No: 821, <br /> Heiley offices 2nd floor<br />             
              KC Arcade, Near TV center,<br />
              CSEZ P.O, Kakkanad, Eranakulam - 682037<br />
              
            </p>
            <p><strong>Phone:</strong> +91 9629794999</p>
            <p><strong>Land No:</strong>+91 484-2977886</p>
            <p><strong>Email:</strong>homebuttonpvtltd@gmail.com</p>
          </Col>
        </Row>

        <div className="footer-bottom text-center mt-4">
          <p>
            © Copyright <span>Home Button Tech. Pvt .Ltd</span>. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
