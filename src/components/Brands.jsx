import React from 'react'

const logos = ['Acme', 'Globex', 'Umbrella', 'Initech', 'Hooli', 'Stark']

export default function Brands(){
  return (
    <section className="section" aria-label="Trusted by" style={{paddingTop:'1.5rem'}}>
      <div className="container" style={{textAlign:'center'}}>
        <div className="section-eyebrow" style={{marginBottom:'1rem'}}>Trusted by modern GTM teams</div>
        <div className="card" style={{padding:'1rem'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1rem', alignItems:'center'}}>
            {logos.map((l,i)=>(
              <div key={i} className="logo" style={{opacity:.8, color:'var(--muted)', fontWeight:600, letterSpacing:'.05em'}}>{l}</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 680px){
          .logo { justify-self: center }
          .card > div { grid-template-columns: repeat(6, 1fr) !important }
        }
      `}</style>
    </section>
  )
}
