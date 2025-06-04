// TermsOfService.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TermsPage.css';

const TermsOfService = () => {
  return (
    <div className="terms-container container-lg py-5">
      <header className="text-center mb-5">
        <h1 className="text-success display-4 fw-bold">
          <i className="bi bi-file-earmark-text me-2"></i>
          509 Junk Hauling Terms of Service
        </h1>
        <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="terms-content">
        {/* 1. Introduction */}
        <article className="mb-5">
          <h2 className="text-success h4 mb-3">1. Our Commitment to You</h2>
          <p>
            As a family-owned Spokane business, we promise transparent service 
            guided by these core principles:
          </p>
          <ul>
            <li>Upfront pricing with no hidden fees</li>
            <li>Respect for your property and privacy</li>
            <li>Environmentally responsible disposal</li>
          </ul>
        </article>

        {/* 2. Service Terms */}
        <article className="mb-5">
          <h2 className="text-success h4 mb-3">2. Service Agreement</h2>
          <div className="mb-4">
            <h3 className="h6">2.1 What We Handle</h3>
            <p>
              We remove household junk, construction debris, and yard waste. 
              <strong> Prohibited items:</strong> hazardous materials, 
              explosives, medical waste.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="h6">2.2 Pricing & Payment</h3>
            <ul>
              <li>Prices guaranteed for 7 days from estimate</li>
              <li>1.5% discount vs. local competitors verified</li>
              <li>Commercial contracts require 25% deposit</li>
            </ul>
          </div>
        </article>

        {/* 3. Commercial Clients */}
        <article className="mb-5">
          <h2 className="text-success h4 mb-3">3. Construction & Business Services</h2>
          <p>
            For our valued commercial partners in Spokane County:
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5>Construction Sites</h5>
                  <ul>
                    <li>Daily debris removal available</li>
                    <li>OSHA-compliant worksites</li>
                    <li>After-hours service +15%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <div className="card h-100">
                <div className="card-body">
                  <h5>Property Managers</h5>
                  <ul>
                    <li>24hr emergency response</li>
                    <li>Tenant lockout assistance</li>
                    <li>Bulk rate pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 4. Privacy & Safety */}
        <article className="mb-5">
          <h2 className="text-success h4 mb-3">4. Your Peace of Mind</h2>
          <div className="privacy-card bg-light p-4 rounded">
            <h5 className="text-success">
              <i className="bi bi-shield-lock me-2"></i>
              Privacy Guarantee
            </h5>
            <ul>
              <li>No shared customer databases</li>
              <li>GPS-tracked vehicles</li>
              <li>Disposal certificates available</li>
            </ul>
          </div>
        </article>

        {/* 5. Legal */}
        <article className="legal-section">
          <h2 className="text-success h4 mb-3">5. Important Details</h2>
          <div className="accordion" id="legalAccordion">
            {/* Cancellation Policy */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#cancellation">
                  Cancellation Policy
                </button>
              </h3>
              <div id="cancellation" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <ul>
                    <li>24hr notice for full refund</li>
                    <li>Same-day cancellation: 50% fee</li>
                    <li>Weather-related: No charge</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liability */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#liability">
                  Liability Protection
                </button>
              </h3>
              <div id="liability" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>
                    We carry $2M general liability insurance. Damage claims must 
                    be filed within 48 hours via 
                    <Link to="/contact" className="text-success"> our contact form</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <footer className="mt-5 text-center">
          <p className="text-muted small">
            Questions? Call our Spokane team: 
            <a href="tel:5095555865" className="text-success"> (509) 555-JUNK</a>
          </p>
          <address className="not-italic">
            509 Junk Hauling LLC<br />
            [Your Spokane Address]<br />
            License #: [WA License Number]
          </address>
        </footer>
      </section>
    </div>
  );
};

export default TermsOfService;
