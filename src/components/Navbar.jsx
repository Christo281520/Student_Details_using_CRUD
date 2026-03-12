import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
  <span className="navbar-brand fw-bold">
    Student Management System
  </span>

  <div className="ms-auto">

    <Link className="text-white me-3 text-decoration-none" to="/">
      Home
    </Link>

    <Link className="text-white me-3 text-decoration-none" to="/student">
      Students
    </Link>

    <Link className="text-white text-decoration-none" to="/about">
      About
    </Link>

  </div>
</nav>
  )
}

export default Navbar