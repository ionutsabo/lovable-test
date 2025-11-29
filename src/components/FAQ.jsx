import React from 'react'

const QA = [
  { q: 'Is there a free trial?', a: 'Yes, 14 days. No credit card required.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Plans are month‑to‑month unless you choose annual for a discount.' },
  { q: 'Do you integrate with Salesforce?', a: 'Yes, native two‑way sync on the Scale plan.' },
  { q: 'Is my data secure?', a: 'We use SOC 2 compliant providers and encrypt data in transit and at rest.' },
]

export default function FAQ(){
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <header className="section-header">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Answers to common questions</h2>
          <p className="section-desc">If you can’t find what you’re looking for, contact support.</p>
        </header>
        <div className="grid cols-2">
          {QA.map((item, i)=> (
            <details key={i} className="card">
              <summary>{item.q}</summary>
              <p style={{color:'var(--muted)'}}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
