import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Nike from './Pages/Nike'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Formal from './Pages/Formal'
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>

      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formal" element={<Formal />} />
          <Route path="/nike" element={<Nike />} />
          
       </Routes>
    </div>
  )
}

