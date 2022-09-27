import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>Appointment Planner</h1>
      </Link>
      <ul>
        <NavLink to="/contact">
         <li>Add Contacts</li>
        </NavLink>
        <NavLink to="/appointment">
          <li>Add Appointments</li>
        </NavLink>
      </ul>
    </nav>
  )
}
