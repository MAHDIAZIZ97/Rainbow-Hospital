import React from 'react'
import { NavLink } from 'react-router-dom'

const Departments = () => {
  return (
    <div>
      <h1>Departments</h1>
      <NavLink to='/departments/cardiology'>Cardiology</NavLink>
      <NavLink to='/departments/neurology'>Neurology</NavLink>
      <NavLink to='/departments/gynecology'>Oncology</NavLink>
      <NavLink to='/departments/orthopedics'>Orthopedics</NavLink>
      
      
    </div>
  )
}

export default Departments
