import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingConfirmation from "../../components/BookingConfirmation/BookingConfirmation";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  // Extract all form fields
  const date = params.get("date");
  const name = params.get("name");
  const email = params.get("email");
  const phone = params.get("phone");
  const address = params.get("address");
  const state = params.get("state");
  const zip = params.get("zip");
  const notes = params.get("notes");

  // Placeholder for confirm action
  const handleConfirm = () => {
    alert("Confirmation email would be sent here!");
    // Here you would trigger your email sending logic
  };

  return (
    <BookingConfirmation
      date={date}
      name={name}
      email={email}
      phone={phone}
      address={address}
      state={state}
      zip={zip}
      notes={notes}
      onConfirm={handleConfirm}
      onBack={() => navigate(-1)}
    />
  );
};

export default Confirmation;