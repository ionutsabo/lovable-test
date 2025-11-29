import React from 'react'

const QUOTES = [
  { quote: 'We booked 3x more meetings in the first month. The team finally loves using a CRM.', name: 'Dana, Head of Growth', company: 'Acme' },
  { quote: 'Set up took 20 minutes and our reply rate jumped from 8% to 24%.', name: 'Miguel, SDR Lead', company: 'Globex' },
  { quote: 'Forecasting is night and day better. Execs trust the numbers.', name: 'Priya, RevOps', company: 'Umbrella' },
]

export default function Testimonials(){
  return (
    <section className="section">
      <div className="container">
        <header className="section-header">
          <div className="section-eyebrow">Social proof</div>
          <h2 className="section-title">Loved by modern sales teams</h2>
          <p className="section-desc">Real results from companies shipping faster growth.</p>
        </header>
        <div className="grid cols-3">
          {QUOTES.map((q,i)=> (
            <blockquote key={i} className="card quote">
              <p>“{q.quote}”</p>
              <footer>— {q.name} · {q.company}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
