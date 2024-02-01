import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className = "nav-container">
      <NavLink to ="/">Home</NavLink>
      <NavLink to ="/">About</NavLink>
    </nav>
  )
}

export default Navbar
