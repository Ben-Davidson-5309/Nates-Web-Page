import { useLocation, useNavigate } from "react-router-dom"; // <-- updated import
import "bootstrap/dist/css/bootstrap.min.css";
export const FormPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // <-- add this
  const queryParams = new URLSearchParams(location.search);
  const selectedDate = queryParams.get("date");

  // Format the date as MM/DD/YYYY if it exists
  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "Not selected";

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg w-100" style={{ maxWidth: "900px" }}>
        <div className="card-body p-5">
          <h1 className="text-center mb-4 display-5 fw-bold text-primary">
            Booking Form
          </h1>
          <p className="text-center mb-4 fs-5">
            <span className="badge bg-info text-dark fs-6 py-2 px-3">
              Selected Date: {formattedDate}
            </span>
          </p>
          <form>
            <div className="row g-4">
              {/* Personal Info */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    required
                    placeholder="123-456-7890"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    required
                    placeholder="123 Main St"
                  />
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="state">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="form-control"
                      required
                      placeholder="State"
                      maxLength="2"
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label fw-semibold" htmlFor="zip">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      className="form-control"
                      required
                      placeholder="ZIP"
                      maxLength="10"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="cc-number">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    name="cc-number"
                    id="cc-number"
                    className="form-control"
                    required
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="row g-2">
                  <div className="col-8 mb-3">
                    <label className="form-label fw-semibold" htmlFor="cc-expiration">
                      Expiration Date
                    </label>
                    <input
                      type="month"
                      name="cc-expiration"
                      id="cc-expiration"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-4 mb-3">
                    <label className="form-label fw-semibold" htmlFor="cc-cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cc-cvv"
                      id="cc-cvv"
                      className="form-control"
                      required
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="notes">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    className="form-control"
                    rows="3"
                    placeholder="Any special requests or notes..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary btn-lg px-5 shadow">
                Submit Booking
              </button>
              <button
                type="button"
                className="btn btn-danger btn-lg px-5 ms-3"
                onClick={() => navigate("/ratesanddates")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

