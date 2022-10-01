import React, {useState} from 'react'
import './ContactPage/ContactPage.css';

export default function AppointmentPage({appointments, setAppointments}) {
  const [name,setName] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      name: name,
      date: date,
      time: time,
      id: Math.random()*1000
    }
    setAppointments([...appointments, newAppointment])
    setName("");
    setDate("");
    setTime("");
  }
  return (
    <div className="new-contact-container">
      <form className="card">
        <div className="header">
          <h2>New Appointment</h2>
          <hr />
        </div>
        <input type="text" placeholder='Name' value={name} onChange={(e) => {
          setName(e.target.value);
        }}/>
        <input type="date" placeholder='Date' value={date} onChange={(e) => {
          setDate(e.target.value);
        }}/>
        <input type="time" placeholder='Time' min="10:00" max="17:00" value={time} onChange={(e) => {
          setTime(e.target.value);
        }}/>
        <button onClick={handleSubmit}>Add</button>

      </form>
    </div>
  )
}
