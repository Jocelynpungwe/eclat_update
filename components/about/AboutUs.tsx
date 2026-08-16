import React from 'react'
import AboutTitle from './AboutTitle'
import { BookOpenCheck } from 'lucide-react'
const AboutUs = () => {
  return (
    <section className="text-left">
      <AboutTitle title="About Us" desc="Who we are" />
      <div className="grid grid-cols-[auto_1fr] gap-x-[1.5rem] py-[1rem]">
        <div className="flex items-center justify-center">
          <BookOpenCheck className="text-[var(--secondary-color)] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
        </div>
        <div className="flex items-center justify-center">
          <p className="font-semibold tracking-[1.5] leading-[1.5]  mb-[0.5rem] ">
            Eclat Services de Nettoyage, a trusted name in professional cleaning
            solutions for apartments, shopping centers, and offices across the
            Gatineau and Ottawa region.
          </p>
        </div>
      </div>
      <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem]">
        Our company is built on a foundation of excellence, dedication, and
        attention to detail, ensuring that every space we clean is left spotless
        and inviting. Whether it’s a cozy apartment, a commercial center, or a
        busy office environment, we tailor our services to meet your unique
        needs and exceed your expectations.
      </p>
      {/* <p className="tracking-[1.5] leading-8 opacity-45 mb-[1rem]">
        At ESN Cleaning Services, we pride ourselves on our commitment to
        quality and professionalism. With over four certifications in various
        cleaning disciplines, our team is equipped with the expertise and
        techniques to tackle even the most challenging cleaning tasks. We use
        advanced tools and eco-friendly cleaning products to ensure your spaces
        are not only clean but also safe for you, your employees, and your loved
        ones.
      </p>
      <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem]">
        We understand that every client is different, which is why we prioritize
        personalized service and open communication. From routine cleanings to
        deep cleaning projects, we are here to ensure your space reflects the
        highest standards of hygiene and care.
      </p>
      <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem]">
        At ESN Cleaning Services, customer satisfaction is at the heart of
        everything we do. We take pride in building long-lasting relationships
        with our clients through reliability, transparency, and unmatched
        service quality. Let us take the hassle out of cleaning so you can focus
        on what truly matters.
      </p> */}
    </section>
  )
}

export default AboutUs
