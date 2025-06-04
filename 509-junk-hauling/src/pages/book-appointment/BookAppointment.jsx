import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from '../../components/Calendar/Calendar'



const BookAppointment = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())

  // When a date is selected, navigate to the form with the date as a query param
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate)
    const dateStr = selectedDate.toISOString().split('T')[0]
    navigate(`/form?date=${dateStr}`)
  }

  return (
    <div className="book-appointment container-lg py-5">
      <h1
        className="text-center mb-4 display-2 fw-bold"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        Book Your Appointment
      </h1>
      <p
        className="text-center mb-4"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        Fill out the form to schedule your free estimate. We look forward to helping you clear your space!
      </p>
      <div className="d-flex justify-content-center mb-4">
        <Calendar date={date} onDateChange={handleDateChange} />
      </div>
    </div>
  )
}

export default BookAppointment