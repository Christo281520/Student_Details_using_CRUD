import React from 'react'
import python from '../assets/studentlogo.jpg'

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={python} alt="" className='image-hero'/>
      <h1 className="fw-bold">Welcome to Student Dashboard</h1>
      <p>Manage student records efficiently with CRUD operations</p>
    </div>
  )
}
export default Hero