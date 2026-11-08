import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Portfolio from '../components/Portfolio'
import Expertise from '../components/Expertise'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Maintenance from '../components/Maintenance'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { getRouteByPath } from '../data/routes'
import { scrollToSection } from '../utils/scroll'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const route = getRouteByPath(location.pathname)
    const sectionId = route?.id || 'home'

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId, {
        behavior: location.state?.instant ? 'auto' : 'smooth',
      })
    }, 50)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.key, location.state])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Expertise />
        <Process />
        <Pricing />
        <Maintenance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
