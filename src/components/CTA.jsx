import React, { useState } from 'react'

export default function CTA(){
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault()
    setError('')
    const isValid = /.+@.+\..+/.test(email)
    if (!isValid) { setError('Please enter a valid email.'); return }
    try {
      const list = JSON.parse(localStorage.getItem('demo_signups')||'[]')
      list.push({ email, ts: Date.now() })
      localStorage.setItem('demo_signups', JSON.stringify(list))
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="cta" className="section">
      <div className="container">
        <div className="card cta-card">
          <h3 style={{margin:0, color:'var(--heading)', fontSize:'1.6rem'}}>Ready to grow faster?</h3>
          <p style={{margin:0, color:'var(--muted)'}}>Start your 14‑day free trial. Connect your tools and launch your first sequence today.</p>
          {submitted ? (
            <div className="card" style={{padding:'.8rem 1rem', borderColor:'rgba(52,211,153,.5)'}}>
              <strong style={{color:'var(--heading)'}}>You're in!</strong> We’ll be in touch soon.
            </div>
          ) : (
            <>
              <form onSubmit={onSubmit} className="cta-form">
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@company.com" aria-label="Email address" className="cta-input" />
                <button className="btn primary" type="submit">Get started</button>
              </form>
              {error && <div role="alert" style={{color:'var(--danger)'}}>{error}</div>}
              <div style={{fontSize:'.95rem', color:'var(--muted)'}}>By continuing you agree to our Terms and Privacy Policy.</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
