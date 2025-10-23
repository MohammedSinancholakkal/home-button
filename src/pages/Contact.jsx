import React from 'react'
import '../styles/Contact.css';
import { useEffect } from 'react';
import { useState } from 'react';


function Contact() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", 
    });
    setSuccessMsg("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg("");
    } else {
      setErrors({});
      setSuccessMsg("✅ Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };




  useEffect(() => {
    const cards = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of the card is visible
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (
    <> 
      {/* Banner */}
<section className="banner-section">
  <div className="banner-overlay">
    <div className="banner-content">
      <h1 className="fade-up">Contact Us</h1>
      <p className="fade-up delay-1">
        We’re here to help and answer any question you might have.  
        Reach out to us and we’ll respond as soon as we can.
      </p>
      <button
            className="fade-up delay-2 contact-btn"
            onClick={() => {
              document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
      </button>

    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section id="contact-form-section" className="contact-form-section">
      <div className="container">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-subtitle">
          We’d love to hear from you. Fill out the form below and we’ll respond soon.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "error" : ""}`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error-text">{errors.name}</small>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "error" : ""}`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                className={`form-control ${errors.phone ? "error" : ""}`}
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error-text">{errors.phone}</small>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                className={`form-control ${errors.subject ? "error" : ""}`}
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <small className="error-text">{errors.subject}</small>}
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label>Message</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "error" : ""}`}
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="error-text">{errors.message}</small>}
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="submit-btn">Send Message</button>
            {successMsg && <p className="success-text">{successMsg}</p>}
          </div>
        </form>
      </div>
    </section>



            {/* Map Section */}
      <section className="map-section d-flex gap-1">
        {/* Left Side */}
        <div className="map-left">
          <div className="slash-shape"></div>
          <div className="map-overlay">
            <h2>Visit Our Office</h2>
            No 24/1701, Suit No: 821, <br /> Heiley offices 2nd floor<br />             
              KC Arcade, Near TV center,<br />
              CSEZ P.O, Kakkanad, Eranakulam - 682037<br />
            <p className="desc">
              We’d love to meet you! Stop by our office or reach out to schedule a visit.
            </p>
            <div className="contact-info">
              <p><i className="fa-solid fa-phone"></i>+91 9629794999</p>
              <p><i className="fa-solid fa-phone"></i>+91 484-2977886</p>
              <p><i className="fa-solid fa-envelope"></i> homebuttonpvtltd@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="map-right" style={{ height: "450px" }}>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=10.00878,76.34253&hl=es;z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>

      {/* Contact Info Section */}
  <section className="info-section">
        <div className="info-container">
          <div className="info-card fade-in-up">
            <i className="fa-solid fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p className="footer-contact">
              No 24/1701, Suit No: 821, Heiley offices 2nd floor            
              KC Arcade, Near TV center,<br />
              CSEZ P.O, Kakkanad, Eranakulam - 682037<br />
              
            </p>
          </div>

          <div className="info-card fade-in-up">
          <i className="fa-solid fa-comment-dots"></i>
            <h3>Contact Us</h3>
            <p>Phone: +91 9629794999</p>
            <p>Land No: +91 484-2977886</p>
            <p>homebuttonpvtltd@gmail.com</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>

          <div className="info-card fade-in-up">
            <i className="fa-solid fa-share-nodes"></i>
            <h3>Connect with Us On Social Media</h3>
            <div className="social-icons-contact">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h2><span>Are you ready</span></h2>
            <h1>Let’s Make Something <br /> Amazing Together</h1>
            <button
              className="hero-btn"
              onClick={() => {
                document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
