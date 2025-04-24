import React from 'react'
import Navbar from './navbar'
import HeroSection from './HeroSection'
import Features from './features'
import Testimonials from './testimonnials'
import Pricing from './pricing'
import Footer from './footer'


const landingPage = () => {
  return (
    <>
    <div className='flex min-h-screen flex-col items-center' >
        <Navbar />
        <HeroSection />
        <Features />
        <Testimonials />
        <Pricing />
    </div>
        <Footer />
    </>
  )
}

export default landingPage