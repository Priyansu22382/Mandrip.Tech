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

export default function Home() {
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
