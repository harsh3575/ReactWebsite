import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route, Navigate } from "react-router-dom"
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'
import Service from './Service'
import Footer from './Footer'


const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/contact' Component={Contact} />
      <Route path='/service' Component={Service} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    <Footer />
  </>
}

export default App
