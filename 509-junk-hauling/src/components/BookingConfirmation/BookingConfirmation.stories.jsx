import React from "react";
import BookingConfirmation from "./BookingConfirmation";

export default {
  title: "Components/BookingConfirmation",
  component: BookingConfirmation,
};

export const Default = () => (
  <BookingConfirmation
    date={new Date().toISOString()}
    name="John Doe"
    email="john@example.com"
    phone="555-1234"
    address="123 Main St"
    state="WA"
    zip="99001"
    notes="Please call before arrival."
    onConfirm={() => alert("Confirmed!")}
    onBack={() => alert("Back!")}
  />
);