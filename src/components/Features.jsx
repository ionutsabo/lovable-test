import React from 'react'

const FEATURES = [
  { title: 'Multi-channel outreach', desc: 'Automate emails, LinkedIn touches, and calls in one place with AI suggested copy.', icon: '📣' },
  { title: 'Smart lead scoring', desc: 'Identify high-intent leads with behavioral and firmographic signals that update in real-time.', icon: '✨' },
  { title: 'Playbooks & templates', desc: 'Launch proven sequences in minutes. Customize and A/B test without complexity.', icon: '🧩' },
  { title: 'Pipeline & forecasting', desc: 'Visualize stages, spot risk, and forecast revenue accurately with minimal data entry.', icon: '📊' },
  { title: 'Integrations', desc: 'Connect to Slack, Gmail, HubSpot, Salesforce, and your data warehouse.', icon: '🧲' },
  { title: 'Analytics', desc: 'Understand what works across channels with cohort and attribution reporting.', icon: '📈' },
]

export default function Features(){
  return (
    <section className="section" id="features">
      <div className="container">
        <header className="section-header">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">Everything you need to grow pipeline</h2>
          <p className="section-desc">Designed for velocity and clarity. No bloated menus, just the tools that move revenue.</p>
        </header>
        <div className="grid cols-3">
          {FEATURES.map((f, i) => (
            <article className="card feature" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
