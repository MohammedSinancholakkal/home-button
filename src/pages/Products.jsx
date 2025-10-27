import React from 'react'
import '../styles/Products.css'
import { Link } from 'react-router-dom'
import erp1 from '../assets/erpimg1.png'
import erp2 from '../assets/erpimg2.webp'
import erp3 from '../assets/eroimg3.jpg'
import crm1 from '../assets/crmimg1.png'
import crm2 from '../assets/crmimg2.webp'
import crm3 from '../assets/crmimg3.jpg'
import hrm1 from '../assets/hrmimg1.jpg'
import hrm2 from '../assets/hrmimg2.jpg'
import hrm3 from '../assets/hrmimg3.jpg'
import lms1 from '../assets/lmsimg1.jpg'
import lms2 from '../assets/lmsimg2.jpg'
import lms3 from '../assets/lmsimg3.jpg'



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
            src={erp1}
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
            src={erp2}
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
            src={erp3}
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
            src={crm1}
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
            src={crm2}
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
            src={crm3}
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
            src={hrm1}
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
            src={hrm2}
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
            src={hrm3}
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
            src={lms1}
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
            src={lms2}
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
            src={lms3}
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
