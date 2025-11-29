import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => `btn ghost ${isActive ? 'active' : ''}`.trim()
  const primaryLinkClass = ({ isActive }) => `btn primary ${isActive ? 'active' : ''}`.trim()

  return (
    <header className="navbar" style={{position:'sticky', top:0, zIndex:50, backdropFilter:'saturate(150%) blur(8px)'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem 0'}}>
        <Link to="/" style={{display:'flex', alignItems:'center', gap:'.6rem', textDecoration:'none', color:'inherit'}}>
          <div style={{width:28, height:28, borderRadius:8, background:'linear-gradient(135deg, #6ee7ff, #a78bfa)'}} />
          <strong style={{color:'var(--heading)'}}>Growth Booster</strong>
        </Link>
        <nav className="desktop" style={{display:'none', gap:'1.2rem'}}>
          <NavLink to="/features" className={linkClass} style={{padding:'.6rem .9rem'}}>Features</NavLink>
          <NavLink to="/how-it-works" className={linkClass} style={{padding:'.6rem .9rem'}}>How it works</NavLink>
          <NavLink to="/pricing" className={linkClass} style={{padding:'.6rem .9rem'}}>Pricing</NavLink>
          <NavLink to="/faq" className={linkClass} style={{padding:'.6rem .9rem'}}>FAQ</NavLink>
          <Link to="/#cta" className="btn primary" style={{padding:'.6rem 1rem'}}>Get started</Link>
        </nav>
        <button className="btn ghost mobile" onClick={()=>setOpen(s=>!s)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:'1rem'}}>
          <div className="card" style={{padding:'1rem', display:'grid', gap:'.5rem'}}>
            <NavLink onClick={()=>setOpen(false)} to="/features" className={linkClass}>Features</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/how-it-works" className={linkClass}>How it works</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/faq" className={linkClass}>FAQ</NavLink>
            <Link onClick={()=>setOpen(false)} to="/#cta" className="btn primary">Get started</Link>
          </div>
        </div>
      )}
      <style>{`
        @media (min-width: 880px) { .desktop { display: flex !important } .mobile { display: none } }
      `}</style>
    </header>
  )
}
