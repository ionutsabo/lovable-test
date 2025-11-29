import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="section" style={{paddingTop:'2rem'}}>
      <div className="container" style={{display:'grid', gap:'1.5rem'}}>
        <div style={{display:'flex', alignItems:'center', gap:'.6rem'}}>
          <div style={{width:24, height:24, borderRadius:6, background:'conic-gradient(from 140deg, #7c3aed, #1f5df7)'}} />
          <strong style={{color:'var(--heading)'}}>Growth Booster</strong>
        </div>
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
          <Link to="/features" className="btn ghost" style={{padding:'.45rem .7rem'}}>Features</Link>
          <Link to="/pricing" className="btn ghost" style={{padding:'.45rem .7rem'}}>Pricing</Link>
          <Link to="/faq" className="btn ghost" style={{padding:'.45rem .7rem'}}>FAQ</Link>
          <a href="#" className="btn ghost" style={{padding:'.45rem .7rem'}}>Privacy</a>
          <a href="#" className="btn ghost" style={{padding:'.45rem .7rem'}}>Terms</a>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
          <small>© {year} Growth Booster Inc. All rights reserved.</small>
          <div style={{display:'flex', gap:'.5rem'}}>
            <a href="#" className="btn ghost" aria-label="Twitter" style={{padding:'.35rem .6rem'}}>𝕏</a>
            <a href="#" className="btn ghost" aria-label="LinkedIn" style={{padding:'.35rem .6rem'}}>in</a>
            <a href="#" className="btn ghost" aria-label="GitHub" style={{padding:'.35rem .6rem'}}>GH</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
