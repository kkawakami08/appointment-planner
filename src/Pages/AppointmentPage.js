import React from 'react'
import './ContactPage/ContactPage.css';

export default function AppointmentPage() {
  return (
    <div className="new-contact-container">
      <form className="card">
        <div className="header">
          <h2>New Appointment</h2>
          <hr />
        </div>
        <input type="text" placeholder='Name' />
        <input type="date" placeholder='Date' />
        <input type="time" placeholder='Time' min="10:00" max="17:00" value="09:00"/>
        <button>Add</button>

      </form>
    </div>
  )
}
