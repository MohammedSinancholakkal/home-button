import { useEffect } from "react";
import "../styles/AboutUs.css";
import aboutusImg1 from "../assets/aboutusimg1.jpg";

function AboutUs() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="about-banner-section">
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content">
          <h1 className="fade-up">About Us</h1>
          <p className="fade-up delay-1">
            Discover who we are, what drives us, and how we’re making an impact.
            Our journey is built on innovation, integrity, and a passion for creating
            solutions that inspire growth and success.
          </p>
          <button
            className="fade-up delay-2 about-btn"
            onClick={() => {
              document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      <section id="about-section" className="about-section">
  <div className=" about-row">
    {/* Left Side - Image */}
    <div className="about-image reveal-on-scroll delay-1">
      <img
        src={aboutusImg1}
        alt="Team Discussion"
        className="about-img"
      />
    </div>

    {/* Right Side - Content */}
    <div className="about-text reveal-on-scroll delay-2">
  <h2>We create quick and reliable software, app and web experiences.</h2>

  <p>
    A software development company based in Coimbatore (India) started its
    operations in the year 2022. Chilla Solutions Pvt. provides cutting-edge web
    and mobile applications that help corporations take their business
    enterprise to the next level through technology. The company has developed a
    strong base of clients from various industries including BFSI, Travel,
    E-Commerce and Manufacturing.
  </p>

  {/* Highlighted points */}
  <ul className="about-points">
    <li>Team of experts capable of handling projects with different complexities and requirements</li>
    <li>Consultation services to help business owners in achieving their goals through technology</li>
    <li>Experts in Web and mobile applications, e-commerce solutions, and custom software development</li>
    <li>We offer IT infrastructure management services to provide a complete end-to-end solution</li>
  </ul>
</div>

  </div>
</section>

    </>
  );
}

export default AboutUs;
