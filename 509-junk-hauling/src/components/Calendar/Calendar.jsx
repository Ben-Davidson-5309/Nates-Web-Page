import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calendar = ({ date = new Date(), onDateChange, activeStartDate }) => {
  return (
    <div className="calendar-component">
      <ReactCalendar
        value={date}
        onChange={onDateChange}
        defaultActiveStartDate={activeStartDate || new Date()}
      />
    </div>
  );
};

export default Calendar;