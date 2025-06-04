import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RatesAndDates.css'

const PRICING = {
  residential: {
    truckload: 443,
    appliance: 84,
    yardWaste: 295
  },
  commercial: {
    weeklyContract: 985,
    dumpsterRental: 1200
  }
}

const COMMERCIAL_SERVICES = [
  {
    title: "Construction Site Contracts",
    benefits: [
      "Daily debris removal schedules",
      "OSHA-compliant disposal",
      "Certified recycling reports"
    ]
  },
  {
    title: "Property Management Solutions",
    benefits: [
      "Turnover cleanouts <24hr response",
      "Emergency storm debris removal",
      "Tenant move-out specials"
    ]
  }
]

const RatesAndDates = () => {
  const navigate = useNavigate()
  const [showCommercial, setShowCommercial] = useState(false)

  return (
    <div className="rates-and-dates container-lg py-5">
      {/* Heading */}
      <h1 className="text-center mb-2 display-2 fw-bold heading-text">
        Rates and Dates
      </h1>
      <h5 className="text-center mb-4 display-5 heading-subtext">
        Spokane’s trusted, family-owned junk hauling
      </h5>

      {/* Family-Owned Section */}
      <section className="family-section mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src="/assets/family-team.jpg" 
              alt="Smith family - 3 generations serving Spokane" 
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="card family-card shadow-sm">
              <div className="card-body py-3 px-4">
                <h2 className="text-success h4 mb-3">
                  <i className="bi bi-people-fill me-2"></i>
                  Family Values, Professional Service
                </h2>
                <p className="lead mb-3">
                  As a Spokane-owned business since 1998, we treat every customer like extended family. You'll always get:
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="bi bi-shield-check text-success me-2"></i>
                    <strong>Privacy guarantee:</strong> No shared customer databases
                  </li>
                  <li>
                    <i className="bi bi-telephone text-success me-2"></i>
                    <strong>Direct owner contact:</strong> (509) 555-JUNK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section mb-5">
        <h2 className="text-center mb-4 display-4 fw-bold text-success">
          Transparent Pricing
        </h2>
        {/* Residential Pricing */}
        <div className="card mb-4 shadow">
          <div className="card-body">
            <h3 className="card-title">
              <i className="bi bi-house-door me-2"></i>
              Residential Services
            </h3>
            <div className="row">
              <div className="col-md-4">
                <div className="price-card">
                  <h4>Full Truckload</h4>
                  <div className="price-display">
                    <span className="text-muted text-decoration-line-through">$450</span>
                    <span className="h2 text-success">${PRICING.residential.truckload}</span>
                  </div>
                  <small>Up to 2 tons - construction debris</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-card">
                  <h4>Appliance Removal</h4>
                  <div className="price-display">
                    <span className="text-muted text-decoration-line-through">$85</span>
                    <span className="h2 text-success">${PRICING.residential.appliance}</span>
                  </div>
                  <small>Per item - fridge, washer, etc.</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-card">
                  <h4>Yard Waste</h4>
                  <div className="price-display">
                    <span className="text-muted text-decoration-line-through">$300</span>
                    <span className="h2 text-success">${PRICING.residential.yardWaste}</span>
                  </div>
                  <small>Brush, branches, leaves</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Pricing Toggle */}
        <div className="text-center mb-4">
          <button 
            className="btn btn-outline-success"
            onClick={() => setShowCommercial(!showCommercial)}
          >
            {showCommercial ? 'Hide' : 'Show'} Commercial Rates
          </button>
        </div>

        {/* Commercial Pricing */}
        {showCommercial && (
          <div className="card mb-4 shadow">
            <div className="card-body">
              <h3 className="card-title">
                <i className="bi bi-building me-2"></i>
                Commercial Services
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="price-card">
                    <h4>Weekly Contract</h4>
                    <div className="price-display">
                      <span className="h2 text-success">${PRICING.commercial.weeklyContract}</span>
                    </div>
                    <small>Bulk construction site rate</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="price-card">
                    <h4>Dumpster Rental</h4>
                    <div className="price-display">
                      <span className="h2 text-success">${PRICING.commercial.dumpsterRental}</span>
                    </div>
                    <small>20yd + 1.5% discount</small>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                {COMMERCIAL_SERVICES.map((service, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="service-card p-3">
                      <h5>{service.title}</h5>
                      <ul className="list-unstyled">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="mb-2">
                            <i className="bi bi-check2-circle text-success me-2"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Booking CTA */}
      <section className="booking-cta text-center py-5 bg-light rounded-3">
        <h2 className="mb-4">Ready to Clear Your Space?</h2>
        <button 
          className="btn btn-success btn-lg px-5"
          onClick={() => navigate('/book-appointment')}
        >
          <i className="bi bi-calendar-check me-2"></i>
          Schedule Free Estimate
        </button>
        <p className="text-muted mt-3 small">
          No credit card required - 100% Spokane-based team
        </p>
      </section>
    </div>
  )
}

export default RatesAndDates