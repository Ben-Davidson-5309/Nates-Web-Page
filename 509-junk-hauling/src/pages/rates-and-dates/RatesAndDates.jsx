import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "./RatesAndDates.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const RatesAndDates = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [reservedDates] = useState([
    { date: "2025-06-10" },
    { date: "2025-06-15" },
    // Add more reserved dates as needed
  ]);
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    const iso = selectedDate.toISOString().split("T")[0];
    const isReserved = reservedDates.find((r) => r.date === iso);
    if (isReserved) {
      alert("This date is already reserved.");
      return;
    }

    setDate(selectedDate);
    setEventDate(iso);
    setShowModal(true);
  };

  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value, 10);
    setMonth(newMonth);
    setDate(new Date(year, newMonth, 1));
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    setYear(newYear);
    setDate(new Date(newYear, month, 1));
  };

  const handleModalSave = () => {
    console.log("Reserved event:", eventTitle, eventDate);
    setShowModal(false);
    navigate(`/form?date=${eventDate}`);
  };

  return (
    <div className="rates-and-dates">
      <h1>Rates and Dates</h1>
      <div className="calendar-controls">
        <label className="form-label me-5">
          Month:
          <select className="form-select" value={month} onChange={handleMonthChange}>
            {Array.from({ length: 12 }, (_, ctr) => (
              <option key={ctr} value={ctr}>
                {new Date(0, ctr).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Year:
          <select className="form-select" value={year} onChange={handleYearChange}>
            {Array.from({ length: 10 }, (_, ctr) => (
              <option key={ctr} value={year - 5 + ctr}>
                {year - 5 + ctr}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Calendar
        date={date}
        onDateChange={handleDateChange}
        activeStartDate={new Date(year, month, 1)}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reserve a Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="John Doe"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Selected Date</Form.Label>
              <Form.Control type="text" value={eventDate} disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleModalSave}>
            Reserve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RatesAndDates;
