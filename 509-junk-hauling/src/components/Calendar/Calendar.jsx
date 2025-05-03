import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = ({ date, onDateChange, activeStartDate }) => {
  return (
    <div className="calendar-component">
      <ReactCalendar
        value={date}
        onChange={onDateChange}
        activeStartDate={activeStartDate}
      />
    </div>
  );
};

export default Calendar;