import React from "react";
import "../styles/Contact.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();

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
  
      emailjs
        .sendForm(
          "service_yycadpw", 
          "template_qu9pq2e",
          e.target,
          "j1IRCKEALXFVA_Rmr"
        )
        .then(() => {
          setSuccessMsg("✅ Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("FAILED...", error.text);
          setSuccessMsg("❌ Failed to send message. Please try again.");
        });
    }
  };
  

  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
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
              We’re here to help and answer any question you might have. Reach
              out to us and we’ll respond as soon as we can.
            </p>
            <button
              className="fade-up delay-2 contact-btn"
              onClick={() => {
                document
                  .getElementById("contact-form-section")
                  ?.scrollIntoView({ behavior: "smooth" });
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
            We’d love to hear from you. Fill out the form below and we’ll
            respond soon.
          </p>

          <form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
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
                {errors.name && (
                  <small className="error-text">{errors.name}</small>
                )}
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
                {errors.email && (
                  <small className="error-text">{errors.email}</small>
                )}
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
                {errors.phone && (
                  <small className="error-text">{errors.phone}</small>
                )}
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
                {errors.subject && (
                  <small className="error-text">{errors.subject}</small>
                )}
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
                {errors.message && (
                  <small className="error-text">{errors.message}</small>
                )}
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {successMsg && <p className="success-text">{successMsg}</p>}
            </div>
          </form>
        </div>
      </section>

      {/* Other content below remains unchanged */}
      {/* Map, Info, CTA Sections */}
    </>
  );
}

export default Contact;
