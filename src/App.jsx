import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>

      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
  )
}

