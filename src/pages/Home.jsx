import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Metrics from '../components/Metrics'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <main id="main">
      <Hero />
      <Brands />
      <Features />
      <HowItWorks />
      <Metrics />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
