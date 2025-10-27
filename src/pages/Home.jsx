import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";
import heroImage from "../assets/new1.png";
import leaderOne from "../assets/leader1.png";
import leadertwo from "../assets/leader2.png";
import leaderthree from "../assets/leader3.png";
import { Link } from "react-router-dom";
import img1 from "../assets/imgnew1.png";
import img2 from "../assets/imgnew2.png";
import img4 from "../assets/imgnew4.png";
import logo1 from "../assets/kumarMart.jpg";
import logo2 from "../assets/kalafinserv1.png";
import logo3 from "../assets/chillaSolutions.png";
function Home() {
  const fullText = "Home Button";
  const [displayedText, setDisplayedText] = useState("");
  const [showScroll, setShowScroll] = useState(false);


  useEffect(() => {
    // Typing animation
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    // Show scroll button after some scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    const img = document.querySelector(".hero-image");
    if (img) img.style.transform = `translate(${x}px, ${y}px)`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const scrollLeaders = (direction) => {
    const container = document.getElementById("leadersWrapper");
    const scrollAmount = container.offsetWidth; // scroll 1 card at a time
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  // Dots change on scroll
useEffect(() => {
  const container = document.getElementById("leadersWrapper");
  const dots = document.querySelectorAll(".leader-dots .dot");

  const handleScroll = () => {
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  container.addEventListener("scroll", handleScroll);
  return () => container.removeEventListener("scroll", handleScroll);
}, []);




useEffect(() => {
  const blocks = document.querySelectorAll(".policy-block");

  const handleScroll = () => {
    blocks.forEach(block => {
      const rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        block.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run on load

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  

  return (
    <>
      {/* Banner Section */}
      <section className="hero-banner d-flex align-items-center" onMouseMove={handleMouseMove}>
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>

        <Container> 
          <Row className="align-items-center">
            <Col md={6} className="text-section text-light">
              <h1 className="display-4 fw-bold mb-3 animate-fade-left">{displayedText}</h1>
              <p className="lead mb-4 text-light animate-fade-left delay-1">
                Empowering Digital Growth with Innovative IT & SaaS Solutions <br />
                World Class ERP and CRM Solutions. Hire our expertise to build your next big idea.
              </p>
              <div className="d-flex gap-3 animate-fade-left delay-2">
               <Link to={'/services#software-section-insight'}>
               <Button  className="px-4 py-2 fw-semibold btn-glow text-light">
                  Explore Services
                </Button>
               </Link>
               <Link to={'/contactus'}>
               <Button variant="outline-info" className="px-4 py-2 fw-semibold text-light border-light btn-outline-glow">
                  Get Started
                </Button>
               </Link>
              </div>
            </Col>

            {/* <Col md={6} className="text-center">
              <img src="" alt="Hero Animation" className="img-fluid hero-image animate-float" />
            </Col> */}
            <Col md={6} className="text-center">
              <img src={heroImage} alt="Hero Animation" className="img-fluid hero-image animate-float" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* brand section */}
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





      {/* Services Section */}
      <section>
        <div className="services-container mb-5">
          <main className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid mt-5">
              <div className="service-card">
              <span class="border-line bottom"></span>
              <span class="border-line left"></span>
                <div className="icon">📊</div>
                <h3>ERP Solutions</h3>
                <p>We offer ERP service to manage work flows effectively, improve productivity and save time.</p>
              </div>
              <div className="service-card">
                <div className="icon">📈</div>
                <h3>CRM Product</h3>
                <p>Manage Leads, Quotes, Sales and Customer services. We convert your ideas into business and increase the revenue.</p>
              </div>
              <div className="service-card">
                <div className="icon">💻</div>
                <h3>Software Development</h3>
                <p>We develop software products based on your needs. We convert your ideas into software products.</p>
              </div>
              <div className="service-card">
                <div className="icon">🌐</div>
                <h3>Website Development</h3>
                <p>We design and develop fully functional websites that are easy to use and are a great fit for your business.</p>
              </div>
              <div className="service-card">
                <div className="icon">🎓</div>
                <h3>Learning Management System</h3>
                <p>
                  We design and develop powerful Learning Management Systems that make online education seamless, interactive, and efficient for both educators and learners.
                </p>
              </div>

              <div className="service-card">
                <div className="icon">👥</div>
                <h3>HR Management</h3>
                <p>We offer HR software exclusively manage the Human resource needs of an organisation.</p>
              </div>
            </div>
          </main>
        </div>
      </section>

{/* image plus content section */}

<section className="policy-section mt-5">
  <div className="policy-content">

     {/* Floating background shapes (for animation) */}
     <div className="floating-shape shape1"></div>
    <div className="floating-shape shape2"></div>
    <div className="floating-shape shape3"></div>

  {/* Floating background shapes square (for animation) */}
    <div className="floating-shape square1"></div>
    <div className="floating-shape square2"></div>
    <div className="floating-shape square3"></div>


    {/* Section Header (inside black box) */}
    <div className="section-header mt-3">
      <h2>Empower Your Organization</h2>
      <p>Modern tools to automate, control, and streamline your workflows.</p>
      <a href="/products" className="learn-more">
          Learn more →
        </a>
    </div>

    {/* ===== First Content Block ===== */}
    <div className="policy-block">
      <div className="policy-text">
        <h3>Empowering Your Digital Presence.</h3>
        <p>
        Smart web technologies to create, manage, and scale websites that stand out online.
        </p>
        <a href="/products" className="learn-more">
        Learn more →
        </a>
      </div>

      <div className="policy-image">
        <img
          src={img1}
          alt="Team working late"
        />
      </div>
    </div>

    {/* ===== Second Content Block ===== */}
    <div className="policy-block mt-5">
      <div className="policy-image">
        <img
          src={img2}
          alt="Team working late"
        />
      </div>

      <div className="policy-text">
      <h3>Deploy faster with modern server architecture.</h3>
      <p>
      Use powerful backend frameworks and cloud hosting to build secure, high-performance websites
      that scale effortlessly with your traffic.
      </p>

      <a href="/products" className="learn-more">
          Learn more →
        </a>
      </div>
    </div>

       {/* ===== third Content Block ===== */}
       <div className="policy-block mt-5">
       <div className="policy-text">
        <h3>Smart cloud solutions built for scalability.</h3>
        <p>
          Deploy, manage, and scale your infrastructure effortlessly in the cloud — 
          with built-in automation, security, and real-time performance optimization 
          that keeps your systems running at peak efficiency.
        </p>

        <a href="/products" className="learn-more">
          Learn more →
        </a>
      </div>


      <div className="policy-image">
        <img
          src={img4}
          alt="Team working late"
        />
      </div>
    </div>
  </div>
</section>


     {/* service insights */}
       {/* <section class="software-section">
  <div class="software-card">
    <img
      src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=612x612&w=0&k=20&c=w-p7co1-4so7fpzJI7H-ZzX-NDK1W41yKvAT_X-Z_qg="
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
      src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=612x612&w=0&k=20&c=w-p7co1-4so7fpzJI7H-ZzX-NDK1W41yKvAT_X-Z_qg="
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
      src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=612x612&w=0&k=20&c=w-p7co1-4so7fpzJI7H-ZzX-NDK1W41yKvAT_X-Z_qg="
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
      src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=612x612&w=0&k=20&c=w-p7co1-4so7fpzJI7H-ZzX-NDK1W41yKvAT_X-Z_qg="
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
</section>  */}

{/* connect us */}
<section className="connect-us-section">
      <div className="overlay">
        <div className="content">
          <h2>
            “Empower your organization to grow smarter, faster, and together.”
          </h2>
         <Link to={'/contactus'}><button className="connect-btn">Connect us →</button></Link>
        </div>
      </div>
    </section>


{/* meet our leaders */}
<section className="leaders-section">
  <h2>Meet our leaders</h2>

  <div className="leaders-container">
    {/* Scrollable Wrapper */}
    <div className="leaders-wrapper" id="leadersWrapper">
      <div className="leader-card">
        <img src={leaderOne} alt="Leader 1" className="leader-photo" />
        <div className="leader-info">
          <h3>Nicolas Rousseau</h3>
          <h4>Executive Vice President, Chief Digital Engineering & Manufacturing Officer</h4>
          <p>
            Nicolas Rousseau drives business for “intelligent industries” by integrating
            product, software, data, and services. He leads a team that enables clients
            to innovate business models and prepare for digital disruptions.
          </p>
        </div>
      </div>

      <div className="leader-card">
        <img src={leadertwo} alt="Leader 2" className="leader-photo" />
        <div className="leader-info">
          <h3>Laura Martinez</h3>
          <h4>Chief Technology Officer</h4>
          <p>
            Laura leads technology strategy and innovation, ensuring seamless integration
            of AI and data-driven solutions to deliver maximum business value.
          </p>
        </div>
      </div>

      <div className="leader-card">
        <img src={leaderthree} alt="Leader 3" className="leader-photo" />
        <div className="leader-info">
          <h3>James Lee</h3>
          <h4>Chief Operations Officer</h4>
          <p>
            James oversees global operations, driving efficiency and innovation while
            ensuring customer satisfaction and operational excellence.
          </p>
        </div>
      </div>
    </div>

    {/* Navigation Buttons + Dots */}
    <div className="leader-nav">
      <button onClick={() => scrollLeaders("left")}>&#10094;</button>
      <div className="leader-dots" id="leaderDots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <button onClick={() => scrollLeaders("right")}>&#10095;</button>
    </div>
  </div>
</section>





      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to Top">
          ↑
        </button>
      )}



      
    </>
  );
}

export default Home;

// --- Scroll Animation Script (runs automatically) ---
window.addEventListener("scroll", () => {
  const services = document.querySelector(".services-container");
  if (!services) return;
  const rect = services.getBoundingClientRect();
  const triggerHeight = window.innerHeight * 0.8;

  if (rect.top < triggerHeight) {
    services.classList.add("visible");
  }
});
