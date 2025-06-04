import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { name, date, time } = location.state || {};

  return (
    <div className="booking-confirmation container-lg py-5 text-center">
      <h1 className="display-4 text-success">Booking Confirmed!</h1>
      <p className="lead mt-4">Thank you for scheduling your appointment.</p>
      <div className="mt-4">
        <h5>Your Appointment Details:</h5>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
      <p className="mt-4 text-muted">We look forward to serving you!</p>
    </div>
  );
}

export default BookingConfirmation;