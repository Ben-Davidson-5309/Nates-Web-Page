// src/components/ClaimForm.jsx
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Reusable Claim Form Component
 * @param {Function} onSubmit - Form submission handler
 * @param {Boolean} isSubmitting - Loading state indicator
 */
const ClaimForm = ({ onSubmit, isSubmitting }) => {
  return (
    <form onSubmit={onSubmit} className="bg-light p-4 rounded-3 shadow-sm">
      {/* Customer Information Section */}   
      <section className="mb-5">
        <h2 className="text-success h4 mb-4 border-bottom pb-2">
          <i className="bi bi-person-circle me-2"></i>
          Your Information
        </h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name <span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone <span className="text-danger">*</span></label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Email <span className="text-danger">*</span></label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Service Address <span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Where did the incident occur?"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      {/* Incident Details Section */}
      <section className="mb-5">
        <h2 className="text-success h4 mb-4 border-bottom pb-2">
          <i className="bi bi-calendar-event me-2"></i>
          Incident Details
        </h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Date <span className="text-danger">*</span></label>
            <input
              type="date"
              className="form-control"
              name="incidentDate"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Approximate Time</label>
            <input
              type="time"
              className="form-control"
              name="incidentTime"
              disabled={isSubmitting}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Damage Type <span className="text-danger">*</span></label>
            <select
              className="form-select"
              name="damageType"
              required
              disabled={isSubmitting}
            >
              <option value="">Select damage type</option>
              <option>Property Damage</option>
              <option>Bodily Injury</option>
              <option>Vehicle Damage</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="text-center mt-5">
        <button
          type="submit"
          className="btn btn-success btn-lg px-5"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Submitting claim" : "Submit claim"}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </>
          ) : (
            <>
              <i className="bi bi-send-check me-2"></i>
              Submit Claim
            </>
          )}
        </button>
      </div>
    </form>
  );
};

ClaimForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

export default ClaimForm;
