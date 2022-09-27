import React from 'react'
import './HomePage.css';

export default function HomePage({contacts,appointments}) {
  return (
    <div className="home-container">
      <div className="card">
        <div className="header">
          <h2>Recent Contacts</h2>
          <hr />
        </div>
        {contacts.slice(0,3).map((contact) => {
         return <div key={contact.id} className="contact">
            <h3>{contact.name}</h3>
            <h4>{contact.phone}</h4>
            <h4>{contact.email}</h4>
            
         </div>
        })}
      </div>
      <div className="card">
        <div className='header' >
          <h2 >Next Appointment</h2>
          <hr />
        </div>
        <div className="next-appt">
          {/* need to sort by date */}
          <h3>{appointments[0].name}</h3>
          <h4>{appointments[0].date}</h4>
          <h4>{appointments[0].time}</h4>
        </div>
      </div>
    </div>
  )
}
