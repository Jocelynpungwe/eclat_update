import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from '@/components/Service'
import Contact from '@/components/Contact'
import Pricing from '@/components/Pricing'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Pricing />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
    </>
  )
}
