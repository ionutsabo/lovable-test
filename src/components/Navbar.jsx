import React, { useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const sections = ['features','how','pricing','faq','cta']
  const active = typeof window !== 'undefined' ? useActiveSection(sections) : null

  const linkClass = (id, base = 'btn ghost') => `${base} ${active===id ? 'active' : ''}`.trim()

  return (
    <header className="navbar" style={{position:'sticky', top:0, zIndex:50, backdropFilter:'saturate(150%) blur(8px)'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1rem 0'}}>
        <a href="#" style={{display:'flex', alignItems:'center', gap:'.6rem', textDecoration:'none', color:'inherit'}}>
          <div style={{width:28, height:28, borderRadius:8, background:'linear-gradient(135deg, #6ee7ff, #a78bfa)'}} />
          <strong style={{color:'var(--heading)'}}>Growth Booster</strong>
        </a>
        <nav className="desktop" style={{display:'none', gap:'1.2rem'}}>
          <a href="#features" className={linkClass('features')} style={{padding:'.6rem .9rem'}}>Features</a>
          <a href="#how" className={linkClass('how')} style={{padding:'.6rem .9rem'}}>How it works</a>
          <a href="#pricing" className={linkClass('pricing')} style={{padding:'.6rem .9rem'}}>Pricing</a>
          <a href="#faq" className={linkClass('faq')} style={{padding:'.6rem .9rem'}}>FAQ</a>
          <a href="#cta" className={linkClass('cta', 'btn primary')} style={{padding:'.6rem 1rem'}}>Get started</a>
        </nav>
        <button className="btn ghost mobile" onClick={()=>setOpen(s=>!s)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:'1rem'}}>
          <div className="card" style={{padding:'1rem', display:'grid', gap:'.5rem'}}>
            <a onClick={()=>setOpen(false)} href="#features" className={linkClass('features')}>Features</a>
            <a onClick={()=>setOpen(false)} href="#how" className={linkClass('how')}>How it works</a>
            <a onClick={()=>setOpen(false)} href="#pricing" className={linkClass('pricing')}>Pricing</a>
            <a onClick={()=>setOpen(false)} href="#faq" className={linkClass('faq')}>FAQ</a>
            <a onClick={()=>setOpen(false)} href="#cta" className={linkClass('cta', 'btn primary')}>Get started</a>
          </div>
        </div>
      )}
      <style>{`
        @media (min-width: 880px) { .desktop { display: flex !important } .mobile { display: none } }
      `}</style>
    </header>
  )
}
