import React from 'react'

const plans = [
  { name: 'Starter', price: '$29', period: 'month', features: ['Up to 3 users','Basic sequences','Email outreach','Standard support'], cta: 'Start free', highlight: false },
  { name: 'Growth', price: '$79', period: 'month', features: ['Up to 10 users','All channels','AI recommendations','Advanced analytics'], cta: 'Start trial', highlight: true },
  { name: 'Scale', price: 'Custom', period: '', features: ['Unlimited users','SSO & roles','Salesforce sync','Dedicated success manager'], cta: 'Contact sales', highlight: false },
]

export default function Pricing(){
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <header className="section-header">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-title">Simple, predictable pricing</h2>
          <p className="section-desc">Choose a plan that fits your stage. Cancel anytime.</p>
        </header>
        <div className="grid cols-3">
          {plans.map((p, i)=> (
            <div key={i} className={`plan card ${p.highlight ? 'popular': ''}`}>
              {p.highlight && <div className="badge" style={{marginBottom:'.6rem'}}>Most popular</div>}
              <h3 style={{margin:'0 0 .25rem', color:'var(--heading)'}}>{p.name}</h3>
              <div className="plan-price">
                <div className="value">{p.price}</div>
                {p.period && <div style={{color:'var(--muted)'}}>/ {p.period}</div>}
              </div>
              <ul className="plan-feats">
                {p.features.map((f, idx)=> (
                  <li key={idx}><span className="tick">✓</span><span>{f}</span></li>
                ))}
              </ul>
              <a href="/#cta" className={`btn ${p.highlight ? 'primary':''}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
