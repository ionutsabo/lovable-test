import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="section hero">
      <div className="container hero-grid">
        <div>
          <span className="badge hero-eyebrow"><span className="dot"/> New: AI Playbooks to 3× your pipeline</span>
          <h1 className="hero-title">Turn leads into loyal customers with less work</h1>
          <p className="hero-desc">Automate outreach, qualify faster, and close more deals with a simple CRM designed for growth teams. No clutter. No steep learning curve.</p>
          <div className="hero-actions">
            <Link to="/get-started" className="btn primary">Start free trial</Link>
            <Link to="/features" className="btn ghost">See features</Link>
          </div>
        </div>
        <div className="card hero-screen" aria-label="Dashboard preview">
          <div className="hero-glow" />
          <div>
            <div style={{fontSize:14, marginBottom:8, color:'var(--muted)', textAlign:'center'}}>Dashboard preview</div>
            <div className="kbd">Demo UI Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}
