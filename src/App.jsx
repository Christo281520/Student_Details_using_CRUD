import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Student from './pages/Student'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App