import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="section" style={{paddingTop:'5.5rem'}}>
      <div className="container" style={{display:'grid', gap:'2rem', alignItems:'center'}}>
        <div style={{maxWidth:'60ch'}}>
          <span className="badge" style={{marginBottom:'.75rem'}}><span className="dot"/> New: AI Playbooks to 3× your pipeline</span>
          <h1 style={{fontSize:'clamp(2.2rem, 5vw, 3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', margin:'0 0 .75rem', color:'var(--heading)'}}>Turn leads into loyal customers with less work</h1>
          <p style={{color:'var(--muted)', maxWidth:'60ch', margin:'0 0 1.25rem'}}>Automate outreach, qualify faster, and close more deals with a simple CRM designed for growth teams. No clutter. No steep learning curve.</p>
          <div style={{display:'flex', gap:'.75rem', flexWrap:'wrap'}}>
            <Link to="/#cta" className="btn primary">Start free trial</Link>
            <Link to="/features" className="btn ghost">See features</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
