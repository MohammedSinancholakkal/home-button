import React from 'react'
import '../styles/Products.css'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>



    {/* banner section */}
    <section className="products-banner-section">
  <div className="products-banner-overlay"></div>
  <div className="products-banner-content">
    <h1 className="fade-up">Our Product Solutions</h1>
    <p className="fade-up delay-1">
      Empower your organization with intelligent systems designed for growth and
      efficiency. From ERP and CRM to HRM and LMS platforms — we deliver
      integrated, scalable, and secure solutions that help teams connect,
      automate, and perform at their best.
    </p>
    <Link to={'/products#products-list'}>
      <button
        className="fade-up delay-2 products-btn"
        onClick={() =>
          document
            .getElementById("products-list")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Products
      </button>
    </Link>
  </div>
</section>




  {/* ===== ERP SECTION ===== */}
      <section className="blog-section" id="products-list">
        <div className="blog-header">
          <h2>Enterprise Resource Planning (ERP)</h2>
          <p>
            Centralize and automate your core business processes — from finance
            to supply chain — with our comprehensive ERP systems
          </p>
        </div>

        <div className="blog-card">
          <img
            src="https://scw-mag.com/wp-content/uploads/sites/7/2025/01/benefits-of-erp-systems-in-supply-chain-management-800x445.png"
            alt="ERP"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">ERP Integration</span>
            <h3>Streamline Operations Across Departments</h3>
            <p>
              Automate workflows and bring your finance, HR, and operations
              into one connected system for seamless collaboration and
              real-time insights.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://juntrax.com/blog/wp-content/uploads/2025/03/Untitled-design-9-1300x684.webp"
            alt="ERP Analytics"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Data Insights</span>
            <h3>Make Smarter Business Decisions</h3>
            <p>
              Leverage analytics dashboards to gain full visibility into
              performance, costs, and inventory — driving informed business
              strategies.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://www.bsquare.in/blog/wp-content/uploads/2023/07/erp-software-development.jpg"
            alt="ERP Customization"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Customization</span>
            <h3>Tailored ERP for Your Organization</h3>
            <p>
              Adapt the ERP system to fit your specific business processes and
              scale as your organization evolves.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CRM SECTION ===== */}
      <section className="blog-section">
        <div className="blog-header">
          <h2>Customer Relationship Management (CRM)</h2>
          <p>
            Build lasting customer relationships and optimize your sales
            pipeline through powerful CRM automation and engagement tools.
          </p>
        </div>

        <div className="blog-card">
          <img
            src="https://blog-cdn.quarkly.io/2023/01/Best-CRM-Tools-for-Small-Businesses.png"
            alt="CRM"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">CRM Automation</span>
            <h3>Automate Your Customer Engagement</h3>
            <p>
              Manage leads, automate workflows, and ensure every interaction is
              meaningful and data-driven — from inquiry to loyalty.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://www.posizionate.com/hs-fs/hubfs/hubspot%20customer%20relationship%20management.jpg?width=1440&name=hubspot%20customer%20relationship%20management.jpg"
            alt="CRM Analytics"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Sales Analytics</span>
            <h3>Gain Insights from Customer Data</h3>
            <p>
              Track conversions, analyze trends, and use customer data to
              predict behavior and increase retention rates.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://www.kickidler.com/assets/images/tickets/1101/1.jpg"
            alt="CRM Team Collaboration"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Collaboration</span>
            <h3>Unite Teams for Better Customer Service</h3>
            <p>
              Empower marketing, support, and sales teams to collaborate in
              real time, ensuring consistent and personalized customer
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HRM SECTION ===== */}
      <section className="blog-section">
        <div className="blog-header">
          <h2>Human Resource Management (HRM)</h2>
          <p>
            Manage your workforce efficiently with digital HR tools — from
            hiring to payroll and employee engagement — all in one secure
            platform.
          </p>
        </div>

        <div className="blog-card">
          <img
            src="https://img.freepik.com/premium-photo/businesswoman-touching-human-resources-sign-hr-hrm-hrd-concept-which-is-staff-icons-human_926199-3844210.jpg"
            alt="HRM"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Talent Management</span>
            <h3>Streamline Recruitment and Onboarding</h3>
            <p>
              Simplify your hiring process and ensure new employees integrate
              seamlessly with structured onboarding workflows.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://www.zinghr.com/wp-content/uploads/2022/01/New-Project-73.jpg"
            alt="HRM Payroll"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Payroll Automation</span>
            <h3>Automate Payroll and Benefits</h3>
            <p>
              Eliminate manual payroll errors and simplify compliance with
              automated salary and benefits processing.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://media.istockphoto.com/id/1467509880/photo/hrm-or-human-resource-management-businessman-holding-magnifier-select-and-accept-to-manager.jpg?s=612x612&w=0&k=20&c=jHwUtais34k9MQ_lq703k1jkF5JXBc10imCBsrT4bHY="
            alt="HRM Engagement"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Employee Engagement</span>
            <h3>Empower and Retain Your Workforce</h3>
            <p>
              Keep employees motivated with tools for performance tracking,
              feedback, and career growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LMS SECTION ===== */}
      <section className="blog-section">
        <div className="blog-header">
          <h2>Learning Management System (LMS)</h2>
          <p>
            Enhance organizational learning with our scalable LMS solutions
            that enable personalized training, progress tracking, and
            certification management.
          </p>
        </div>

        <div className="blog-card">
          <img
            src="https://media.istockphoto.com/id/1451316016/photo/lms-learning-management-system-for-lesson-and-online-education-course-application-study-e.jpg?s=612x612&w=0&k=20&c=fRH0AanVP3IkjZtYNwJiyALkAvN3plLtrcPd1L2MrJo="
            alt="LMS"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Online Learning</span>
            <h3>Deliver Engaging Online Courses</h3>
            <p>
              Create dynamic, interactive content to boost engagement and
              retention through intuitive learning experiences.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://www.empowerelearning.com/wp-content/uploads/2023/06/Homepage.jpg"
            alt="LMS Analytics"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Analytics</span>
            <h3>Track and Measure Learning Progress</h3>
            <p>
              Gain insights into learner performance with detailed progress
              reports and analytics-driven dashboards.
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img
            src="https://png.pngtree.com/background/20250213/original/pngtree-online-learning-with-digital-education-platforms-picture-image_15918473.jpg"
            alt="LMS Collaboration"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-tag tech">Collaboration</span>
            <h3>Enable Collaborative Learning</h3>
            <p>
              Foster team-based learning and discussions through community
              forums, peer feedback, and group activities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
