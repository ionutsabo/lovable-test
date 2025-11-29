import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `btn ghost ${isActive ? 'active' : ''}`.trim()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="Home">
          <div className="brand-mark" />
          <strong className="brand-name">Growth Booster</strong>
        </Link>
        <nav className="nav">
          <NavLink to="/features" className={linkClass}>Features</NavLink>
          <NavLink to="/how" className={linkClass}>How it works</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
          <NavLink to="/get-started" className={({ isActive }) => `btn primary ${isActive ? 'active' : ''}`}>Get started</NavLink>
        </nav>
        <button className="btn ghost nav-toggle" onClick={()=>setOpen(s=>!s)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:'1rem'}}>
          <div className="card" style={{padding:'1rem', display:'grid', gap:'.5rem'}}>
            <NavLink onClick={()=>setOpen(false)} to="/features" className={linkClass}>Features</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/how" className={linkClass}>How it works</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/get-started" className={({ isActive }) => `btn primary ${isActive ? 'active' : ''}`}>Get started</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
