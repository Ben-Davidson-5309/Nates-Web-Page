import React from "react";

const BookingConfirmation = ({
  date,
  name,
  email,
  phone,
  address,
  state,
  zip,
  notes,
  onConfirm,
  onBack,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "Not provided";

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4 text-success fw-bold">
            Reservation Confirmed!
          </h2>
          <p className="text-center fs-5">
            Your reservation for <strong>{formattedDate}</strong> has been received.
          </p>
          <hr />
          <h4 className="mb-3">Booking Details</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item"><strong>Name:</strong> {name}</li>
            <li className="list-group-item"><strong>Email:</strong> {email}</li>
            <li className="list-group-item"><strong>Phone:</strong> {phone}</li>
            <li className="list-group-item"><strong>Address:</strong> {address}, {state} {zip}</li>
            {notes && <li className="list-group-item"><strong>Notes:</strong> {notes}</li>}
          </ul>
          <div className="text-center">
            <button className="btn btn-primary btn-lg px-5 shadow" onClick={onConfirm}>
              Confirm & Send Email
            </button>
            <br />
            <button
              className="btn btn-danger btn-lg px-5 shadow mt-3"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;