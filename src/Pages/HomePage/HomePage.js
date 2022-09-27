import React from 'react'
import './HomePage.css';

export default function HomePage({contacts}) {
  return (
    <div className="home-container">
      <div className="top-contacts card">
        <h2>Recent Contacts</h2>
        <hr />
        {contacts.slice(0,3).map((contact) => {
         return <div key={contact.id} className="contact">
            <h3>{contact.name}</h3>
            <h4>{contact.phone}</h4>
            <h4>{contact.email}</h4>
            
         </div>
        })}
      </div>
      <div className="next-appointment card">
        <h2>Next Appointment</h2>
        <hr />
      </div>
    </div>
  )
}
