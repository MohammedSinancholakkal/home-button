import React, { useState, useEffect } from "react";
import "../styles/Services.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.png';


function Services() {



  // ✅ Hooks must be inside the component
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const section = document.querySelector(".software-section.animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
          } else {
            section.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);



  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const yOffset = -100; // adjust for navbar height
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
      {/* ===== Services Banner ===== */}
      <section className="services-banner-section">
        <div className="services-banner-overlay"></div>
        <div className="services-banner-content">
          <h1 className="fade-up">Our Services</h1>
          <p className="fade-up delay-1">
            Empower your business with innovative, scalable, and high-performance
            digital solutions. From web and mobile app development to cloud
            integration and automation — we bring your ideas to life.
          </p>
         <Link to={'/services#software-section-insight'}>
         <button
            className="fade-up delay-2 services-btn"
            onClick={() =>
              document
                .getElementById("services-list")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore More
          </button>
         </Link>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services-list">
        <div className="services-container mb-5">
          <main className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid mt-5">
              <div className="service-card">
                <div className="icon">📊</div>
                <h3>ERP Solutions</h3>
                <p>
                  We offer ERP services to manage workflows effectively, improve
                  productivity, and save time.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">📈</div>
                <h3>CRM Product</h3>
                <p>
                  Manage leads, quotes, sales, and customer services. Convert
                  your ideas into revenue-driven solutions.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">💻</div>
                <h3>Software Development</h3>
                <p>
                  We develop tailored software products that align perfectly with
                  your business needs and growth plans.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">🌐</div>
                <h3>Website Development</h3>
                <p>
                  We design and develop dynamic, responsive websites that enhance
                  user engagement and conversion.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">📱</div>
                <h3>Mobile App Development</h3>
                <p>
                  Our mobile apps combine smooth performance, modern UI, and
                  strategic growth-driven functionality.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">👥</div>
                <h3>HR Management</h3>
                <p>
                  Simplify workforce operations with powerful HR software
                  designed to streamline your organization’s needs.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>





       {/* service insights */}
       <section className="software-section animate " id="software-section-insight">
             {/* Section Heading */}
  <div className="software-heading">
    <h2>Empowering Businesses with Innovative Software Solutions</h2>
    <p>
      Discover our range of intelligent, high-performing software products designed to
      streamline operations, boost productivity, and drive digital growth.
    </p>
  </div>
       <div class="software-card">
          <img
            src={card1}
            alt="ERP Software"
            class="software-image"
          />
          <div class="software-content">
            <h3>ERP Software</h3>
            <p>
              This ERP software is for business owners to develop and manage their
              business' resources. It includes features such as resource management,
              usage tracking, and budgeting. It is ideal for businesses of all sizes
              and industries.
            </p>
          </div>
        </div>

        <div class="software-card">
          <img
            src={card2}
            alt="CRM Software"
            class="software-image"
          />
          <div class="software-content">
            <h3>CRM Software</h3>
            <p>
              The CRM software provides a simple, easy-to-use interface for managing
              relationships between customers. It is perfect for businesses that need
              to keep track of customer data and manage it quickly.
            </p>
          </div>
        </div>

        <div class="software-card mt-3" >
          <img
            src={card3}
            alt="Inventory Software"
            class="software-image"
          />
          <div class="software-content">
            <h3>Custom Software for Business</h3>
            <p>
            The custom software application "Business Software for Businesses" that is designed to help businesses stay organized. This product is for individuals or a business that needs custom software to help with specific requirements.
            </p>
          </div>
        </div>

        <div class="software-card mt-3">
          <img
            src={card4}
            alt="HR Software"
            class="software-image"
          />
          <div class="software-content">
            <h3>Salesforce Customisation</h3>
            <p>
            Salesforce Customization is perfect for business owners who want to manage their business data more efficiently. With Salesforce Customization, they can control how content is stored, accessed, and used.
            </p>
          </div>
        </div>
      </section> 

      {/* ===== Scroll to Top Button ===== */}
      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Services;
