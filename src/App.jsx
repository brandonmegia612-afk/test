import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

export default function App() {
  return (
    <div>
      <header style={{padding:10, borderBottom:'1px solid #ddd'}}>
        <Link to="/">Inicio</Link>
      </header>
      <main style={{padding:20}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </main>
    </div>
  )
}
