import React from 'react'

const STEPS = [
  { title: "Import your leads", desc: "Sync from your CRM or upload a CSV. We'll enrich missing data automatically.", num: 1 },
  { title: 'Pick a playbook', desc: 'Choose from proven sequences for outbound, activation, or expansion.', num: 2 },
  { title: 'Launch and iterate', desc: 'AI suggests optimizations and next best actions to boost reply rates.', num: 3 },
]

export default function HowItWorks(){
  return (
    <section className="section" id="how">
      <div className="container grid cols-2" style={{alignItems:'start'}}>
        <div>
          <header className="section-header" style={{textAlign:'left'}}>
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title">From zero to pipeline in a day</h2>
            <p className="section-desc">Simple setup. Measurable results. Ship your first sequence in under 30 minutes.</p>
          </header>
          <div style={{display:'grid', gap:'.9rem'}}>
            {STEPS.map(s => (
              <div key={s.num} className="card step">
                <div className="step-num">{s.num}</div>
                <div>
                  <div style={{fontWeight:800, color:'var(--heading)'}}>{s.title}</div>
                  <div style={{color:'var(--muted)'}}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{alignSelf:'center'}}>
          <div className="card" style={{padding:'1rem'}}>
            <div style={{height:360, border:'1px dashed rgba(148,163,184,.35)', borderRadius:12, display:'grid', placeItems:'center', color:'var(--muted)'}}>
              <div>
                <div style={{textAlign:'center', marginBottom:8}}>Setup preview</div>
                <div className="kbd">Screenshot placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
