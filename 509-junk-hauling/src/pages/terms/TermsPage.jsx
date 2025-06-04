// TermsOfService.jsx
import { Link } from "react-router-dom";
import "./TermsPage.css";

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

      {/* 1. Introduction */}

      <section className="terms-content">
        <article className="mb-5">
          <h2 className="text-success h4 mb-3">1. Our Commitment to You</h2>
          <div className="card mb-3">
            <div className="card-body">
              <p>
                As a family-owned Spokane business, we promise transparent
                service guided by these core principles:
              </p>
              <ul>
                <li>Upfront pricing with no hidden fees</li>
                <li>Respect for your property and privacy</li>
                <li>Environmentally responsible disposal</li>
              </ul>
            </div>
          </div>
        </article>

        {/* 2. Service Terms */}

        <article className="mb-5">
          <h2 className="text-success h4 mb-3">2. Service Agreement</h2>
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="h6">2.1 What We Handle</h3>
              <p>
                We remove household junk, construction debris, and yard waste.
                <strong> Prohibited items:</strong> hazardous materials,
                explosives, medical waste.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="card">
              <div className="card-body py-3 px-3">
                <h3 className="h6">2.2 Pricing & Payment</h3>
                <ul className="mb-0">
                  <li>Prices guaranteed for 7 days from estimate</li>
                  <li>1.5% discount vs. local competitors verified</li>
                  <li>Commercial contracts require 25% deposit</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* 3. Commercial Clients */}

        <article className="mb-5">
          <h2 className="text-success h4 mb-3">
            3. Construction & Business Services
          </h2>
          <p>For our valued commercial partners in Spokane County:</p>
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

        {/* 5. Legal In TermsOfService.jsx - Updated Legal Section */}

        <article className="legal-section">
          <h2 className="text-success h4 mb-3">5. Important Details</h2>
          <div className="accordion" id="legalAccordion">
            {/* Cancellation Policy */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#cancellation"
                  aria-expanded="true"
                  aria-controls="cancellation"
                >
                  Cancellation Policy
                </button>
              </h3>
              <div
                id="cancellation"
                className="accordion-collapse collapse show"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <ul className="mb-0">
                    <li>24hr notice for full refund</li>
                    <li>Same-day cancellation: 50% fee</li>
                    <li>Weather-related: No charge</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liability Protection */}

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#liability"
                  aria-expanded="false"
                  aria-controls="liability"
                >
                  Liability Protection
                </button>
              </h3>
              <div
                id="liability"
                className="accordion-collapse collapse"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <ul className="mb-0">
                    <li>We carry $2M general liability insurance.</li>
                    <li>
                      Damage claims must be filed within 48 hours via{" "}
                      <Link to="/claimform" className="text-primary">
                        our contact form
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <footer className="mt-5 text-center">
          <p className="text-muted small">
            Questions? Call our Spokane team:
            <a href="tel:5095555865" className="text-primary">
              {" "}
              (509) 743-5771
            </a>
          </p>
          <address className="not-italic">
            509 Junk Hauling LLC
            <br />
            [Your Spokane Address]
            <br />
            License #: [WA License Number]
          </address>
        </footer>
      </section>

      {/* Bootstrap JS Bundle (includes Popper) */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default TermsOfService;
