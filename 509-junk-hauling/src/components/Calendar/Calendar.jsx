import ReactCalendar from "react-calendar";
import './Calendar.css';


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
