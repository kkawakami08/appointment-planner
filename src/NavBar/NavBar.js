import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <h1>Appointment Planner</h1>
      <ul>
        <NavLink to="/contact">
         <li>View/Add Contacts</li>
        </NavLink>
        <NavLink to="/appointment">
          <li>View/Add Appointments</li>
        </NavLink>
      </ul>
    </nav>
  )
}
