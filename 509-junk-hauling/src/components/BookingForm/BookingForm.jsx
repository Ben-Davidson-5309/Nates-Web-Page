import { useState, useRef } from "react";
import { useForm } from "@formspree/react";
import { useNavigate, Link } from "react-router-dom";

export const BookingForm = ({ selectedDate }) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "Not selected";

  const validate = (form) => {
    const errorList = [];

    if (!form.name.value.trim()) errorList.push("Name is required.");
    if (!form.email.value.trim()) errorList.push("Email is required.");
    if (!form.phone.value.trim()) errorList.push("Phone number is required.");
    if (!form.address.value.trim()) errorList.push("Address is required.");
    if (!form.state.value.trim()) errorList.push("State is required.");
    if (!form.zip.value.trim()) errorList.push("ZIP Code is required.");
    if (!form["cc-number"].value.trim()) errorList.push("Credit Card Number is required.");
    if (!form["cc-expiration"].value.trim()) errorList.push("Expiration Date is required.");
    if (!form["cc-cvv"].value.trim()) errorList.push("CVV is required.");
    if (!form.terms.checked) errorList.push("You must agree to the terms and conditions.");

    // Pattern checks
    if (form.phone.value && !/^\d{3}-\d{3}-\d{4}$/.test(form.phone.value))
      errorList.push("Phone number must be in the format 123-456-7890.");
    if (form.zip.value && !/^\d{5}(-\d{4})?$/.test(form.zip.value))
      errorList.push("ZIP Code must be 5 digits or 5+4 digits (e.g. 12345 or 12345-6789).");
    if (form["cc-number"].value && !/^\d{4} \d{4} \d{4} \d{4}$/.test(form["cc-number"].value))
      errorList.push("Credit Card Number must be in the format 1234 5678 9012 3456.");
    if (form["cc-cvv"].value && !/^\d{3}$/.test(form["cc-cvv"].value))
      errorList.push("CVV must be 3 digits.");
    if (form["cc-expiration"].value && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(form["cc-expiration"].value))
      errorList.push("Expiration Date must be in the format MM/YY.");

    return errorList;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const errorList = validate(form);
    if (errorList.length > 0) {
      setErrors(errorList);
      return;
    }

    setErrors([]);
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);

    if (state.succeeded) {
      const params = new URLSearchParams({
        date: selectedDate,
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        state: form.state.value,
        zip: form.zip.value,
        notes: form.notes.value,
      });
      navigate(`/confirmation?${params.toString()}`);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg w-100 border-success" style={{ maxWidth: "900px", background: "#fff" }}>
        <div className="card-body p-5">
          <h1 className="text-center mb-4 display-5 fw-bold text-success">Booking Form</h1>
          <p className="text-center mb-4 fs-5">
            <span className="badge bg-primary text-light fs-6 py-2 px-3">
              Selected Date: {formattedDate}
            </span>
          </p>

          {errors.length > 0 && (
            <div className="alert alert-danger">
              <strong>Please fix the following:</strong>
              <ul className="mb-0">
                {errors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <form ref={formRef} onSubmit={onSubmit}>
            <input type="hidden" name="Selected Date" value={formattedDate} />

            <div className="row g-4">
              {/* Personal Info */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className="form-control border-success" required placeholder="Your full name" autoFocus />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control border-success" required placeholder="you@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="phone">Phone Number</label>
                  <input type="tel" name="phone" id="phone" className="form-control border-success" required placeholder="123-456-7890" pattern="\d{3}-\d{3}-\d{4}" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="address">Address</label>
                  <input type="text" name="address" id="address" className="form-control border-success" required placeholder="123 Main St" />
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label fw-semibold text-success" htmlFor="state">State</label>
                    <input type="text" name="state" id="state" className="form-control border-success" required maxLength="2" placeholder="CA" />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label fw-semibold text-success" htmlFor="zip">ZIP Code</label>
                    <input type="text" name="zip" id="zip" className="form-control border-success" required maxLength="10" placeholder="12345" pattern="\d{5}(-\d{4})?" />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="cc-number">Credit Card Number</label>
                  <input type="text" name="cc-number" id="cc-number" className="form-control border-success" required placeholder="1234 5678 9012 3456" pattern="\d{4} \d{4} \d{4} \d{4}" />
                </div>
                <div className="row g-2">
                  <div className="col-8 mb-3">
                    <label className="form-label fw-semibold text-success" htmlFor="cc-expiration">Expiration Date</label>
                    <input type="text" name="cc-expiration" id="cc-expiration" className="form-control border-success" required placeholder="MM/YY" />
                  </div>
                  <div className="col-4 mb-3">
                    <label className="form-label fw-semibold text-success" htmlFor="cc-cvv">CVV</label>
                    <input type="text" name="cc-cvv" id="cc-cvv" className="form-control border-success" required placeholder="123" maxLength="3" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-success" htmlFor="notes">Additional Notes</label>
                  <textarea name="notes" id="notes" className="form-control border-success" rows="3" placeholder="Any special requests or notes..."></textarea>
                </div>
              </div>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input border-success" type="checkbox" id="terms" required />
              <label className="form-check-label text-success" htmlFor="terms">
                I agree to the <Link to="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</Link>.
              </label>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success btn-lg px-5 shadow" disabled={loading}>
                {loading ? "Submitting..." : "Submit Booking"}
              </button>
              <button type="button" className="btn btn-outline-success btn-lg px-5 ms-3" onClick={() => navigate("/ratesanddates")}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
