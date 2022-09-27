import React from 'react'
import './ContactPage.css';

export default function () {
  return (
    <div className="new-contact-container">
      <form className="card">
        <div className="header">
          <h2>New Contact</h2>
          <hr />
        </div>
        <input type="text" placeholder='Name' />
        <input type="tel" placeholder='Phone Number' />
        <input type="email" placeholder='Email' />
        <button>Add</button>

      </form>
    </div>
  )
}
