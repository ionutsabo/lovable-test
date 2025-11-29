import React from 'react'

const METRICS = [
  { label: 'Avg. reply rate', value: '27%' },
  { label: 'Meetings booked', value: '3.1x' },
  { label: 'Time saved', value: '12h/wk' },
  { label: 'Ramp time', value: '2 days' },
]

export default function Metrics(){
  return (
    <section className="section" aria-label="Key results">
      <div className="container grid cols-4" style={{gap:'1rem'}}>
        {METRICS.map((m,i)=> (
          <div key={i} className="card" style={{padding:'1rem', textAlign:'center'}}>
            <div style={{fontWeight:800, fontSize:'1.6rem', color:'var(--heading)'}}>{m.value}</div>
            <div style={{color:'var(--muted)'}}>{m.label}</div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 767px){ .cols-4 { grid-template-columns: repeat(2,1fr) !important } }`}</style>
    </section>
  )
}
