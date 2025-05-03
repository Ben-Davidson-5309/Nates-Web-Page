import React, { useState } from "react";
import Calendar from "../../components/Calendar/Calendar"; // Import the Calendar component
import "./RatesAndDates.css";
import { useNavigate } from "react-router-dom";

function RatesAndDates() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // Navigate to the form page with the selected date
    navigate(`/form?date=${selectedDate.toISOString().split("T")[0]}`);
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

  return (
    <div className="rates-and-dates">
      <h1>Rates and Dates</h1>
      <div className="calendar-controls">
        <label>
          Month:
          <select value={month} onChange={handleMonthChange}>
            {Array.from({ length: 12 }, (_, ctr) => (
              <option key={ctr} value={ctr}>
                {new Date(0, ctr).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <select value={year} onChange={handleYearChange}>
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
    </div>
  );
}

export default RatesAndDates;
