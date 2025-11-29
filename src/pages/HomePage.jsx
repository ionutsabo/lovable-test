import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Metrics from '../components/Metrics'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Brands />
      <Metrics />
      <CTA />
    </main>
  )
}
