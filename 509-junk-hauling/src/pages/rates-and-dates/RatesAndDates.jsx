// RatesAndDates.jsx
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './RatesAndDates.css'
import { useNavigate } from 'react-router-dom'

const RatesAndDates = () => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i)

  const [activeDate, setActiveDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const reservedDates = ['2025-06-15', '2025-06-20', '2025-07-04'] // Sample reserved dates

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
    setShowModal(true)
  }

  const handleConfirm = () => {
    const dateStr = selectedDate ? selectedDate.toISOString().split('T')[0] : ''
    navigate(`/form?date=${dateStr}&name=${encodeURIComponent(name)}`)
  }

  return (
    <div className="rates-and-dates">
      <h1 className="text-center mb-2 display-2 fw-bold heading-text">
        Dates and Rates
      </h1>
      <h5 className="text-center mb-4 display-5 heading-subtext">
        Please select a date to reserve
      </h5>

      <div className="calendar-caption">
        {activeDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>

      <div className="calendar-controls">
        <label>
          Month:
          <select value={activeDate.getMonth()} onChange={handleMonthChange}>
            {monthNames.map((m, i) => (
              <option key={i} value={i}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Year:
          <select value={activeDate.getFullYear()} onChange={handleYearChange}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="calendar-component">
        <Calendar
          locale="en-US"
          onChange={onSelectDate}
          value={selectedDate}
          activeStartDate={activeDate}
          onActiveStartDateChange={onActiveStartDateChange}
          tileClassName={({ date }) => {
            const iso = date.toISOString().split('T')[0]
            if (reservedDates.includes(iso)) return 'reserved-date'
          }}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="custom-modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Reserve a Date</h4>
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <form onSubmit={e => {
              e.preventDefault()
              handleConfirm()
            }}>
              <div className="mb-3 text-start">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label fw-bold">Selected Date</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                  readOnly
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary modal-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success modal-btn"
                  disabled={!name}
                >
                  Confirm & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default RatesAndDates
