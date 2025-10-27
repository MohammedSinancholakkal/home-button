import { useEffect } from "react";
import "../styles/Aboutus.css";
import aboutusImg1 from "../assets/aboutusimg1.webp";
import whychooseImg from "../assets/whychooseimg1.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/kumarMart.jpg";
import logo2 from "../assets/kalafinserv1.png";
import logo3 from "../assets/chillaSolutions.png";



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
        <Link to={'/contactus'}>
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
        </Link>
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



 {/* ===== Why Choose Us Section ===== */}
 <section className="why-choose-section py-5">
        <Container>
          <Row className="align-items-center row">
            {/* Left Content */}
            <Col md={6} className="reveal-on-scroll">
              <h2 className="why-title">Why Choose Us</h2>
              <p className="why-desc">
                At Chilla Solutions, we focus on delivering measurable impact through
                cutting-edge digital solutions. We believe in innovation with intent —
                every project we take on is aimed at improving efficiency, scalability, and user experience.
              </p>
              <ul className="why-points">
                <li> Customized software tailored to your business needs</li>
                <li> Transparent communication and on-time delivery</li>
                <li> Experienced professionals with diverse domain expertise</li>
                <li> Ongoing support and long-term client partnerships</li>
              </ul>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center reveal-on-scroll">
              <img
                src={whychooseImg}
                alt="Why Choose Us"
                className="why-image img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>



            {/* ===== Works We Have Done Section ===== */}
            {/* <section className="works-section">
        <Container>
          <h2 className="section-title text-center">Works We Have Done</h2>
          <p className="text-center section-subtitle">
            A glimpse of our recent projects that transformed our clients’ businesses.
          </p>
          <Row>
            <Col md={4} sm={6} xs={12} className="mb-4 reveal-on-scroll delay-1">
              <Card className="work-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>E-Commerce Platform</Card.Title>
                  <Card.Text>
                    A scalable online shopping experience built with React and Node.js.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4 reveal-on-scroll delay-2">
              <Card className="work-card">
                <Card.Img variant="top" src=""/>
                <Card.Body>
                  <Card.Title>Business Automation App</Card.Title>
                  <Card.Text>
                    Streamlining daily operations with AI-powered dashboards and analytics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4 reveal-on-scroll delay-3">
              <Card className="work-card">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Travel Booking Portal</Card.Title>
                  <Card.Text>
                    A seamless travel experience integrating secure payment systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}



      {/* get in touch */}
      <section className="contact-cta-section">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={8} sm={12} className="cta-text">
            <h2>Let’s Build Something Great Together</h2>
            <p>
              Have a project in mind or want to learn more about our services? 
              Reach out to us and our team will get back to you shortly.
            </p>
          </Col>
          <Col md={4} sm={12} className="text-md-end text-center mt-3 mt-md-0">
           <Link to={'/contactus'}> <Button className="cta-btn">
              Get in Touch <span className="arrow">→</span>
            </Button></Link>
          </Col>
        </Row>
      </Container>
    </section>


            {/* brand section */}
            <section className="trusted-section container mt-5">
      <h2 className="heading">Trusted by companies around the globe</h2>

      <div className="logo-slider mb-5">
        <div className="logo-track mt-5">
          {/* Repeat all logos twice to make it loop seamlessly */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="logo-item">
                <img
                  src={logo1}
                  alt="Kumar Mart"
                />
              </div>
              <div className="logo-item">
                <img
                  src={logo2}
                  alt="Kala Finserv"
                />
              </div>
              <div className="logo-item">
                <img
                  src={logo3}
                  alt="chilla solutions"
                />
              </div>
              <div className="logo-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUIhQCTegyuo6ZuTmrG8m2Qt73AXaVN9z2w&s"
                  alt="PureTech"
                />
              </div>
              <div className="logo-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Chiesi_Logo_-_1.Primary_pantoni_RGB.jpg/1200px-Chiesi_Logo_-_1.Primary_pantoni_RGB.jpg"
                  alt="Chiesi"
                />
              </div>
              <div className="logo-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/BANK_ISLAM_LOGO.jpg"
                  alt="Bank Islam"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}

export default AboutUs;
