// RatesAndDates.jsx
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'  // base styles (we override most below)
import './RatesAndDates.css'

const RatesAndDates = () => {
  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]
  const currentYear = new Date().getFullYear()
  const years = Array.from({length: 11}, (_, i) => currentYear + i)  // e.g. 2025–2035

  const [activeDate, setActiveDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    const next = new Date(activeDate)
    next.setMonth(newMonth)
    setActiveDate(next)
  }

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10)
    const next = new Date(activeDate)
    next.setFullYear(newYear)
    setActiveDate(next)
  }

  const onActiveStartDateChange = ({ activeStartDate }) => {
    setActiveDate(activeStartDate)
  }

  const onSelectDate = (date) => {
    setSelectedDate(date)
    setActiveDate(date)
  }

  return (
    <div className="rates-and-dates">
      <h1
        className="text-center mb-2 display-2 fw-bold"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        Dates and Rates
      </h1>
      <h5
        className="text-center mb-4 display-5"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        Please select a date to reserve
      </h5>

      <div className="calendar-controls">
        <label>
          Month:
          <select
            value={activeDate.getMonth()}
            onChange={handleMonthChange}
          >
            {monthNames.map((m, i) => (
              <option key={i} value={i}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Year:
          <select
            value={activeDate.getFullYear()}
            onChange={handleYearChange}
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="calendar-component">
        <Calendar
          onChange={onSelectDate}
          value={selectedDate}
          activeStartDate={activeDate}
          onActiveStartDateChange={onActiveStartDateChange}
        />
      </div>
    </div>
  )
}

export default RatesAndDates
