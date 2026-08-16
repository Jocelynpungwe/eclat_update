import React from 'react'
import AboutTitle from '../AboutTitle'
import PortfolioImages from '../PortfolioImages'
import Service from '@/components/Service'

const Portfolio = () => {
  return (
    <section id="service" className="py-[6rem] bg-white ">
      <div className="container">
        <div className="grid sm:grid-cols-[250px_1fr] gap-8">
          <AboutTitle
            title="Our Service"
            desc="Clean Sweep, Our before and after"
          />
          <div className="flex items-center justify-center">
            <p className="tracking-[1.5] leading-6 opacity-45  mb-[1.5rem] ">
              We offer a wide range of cleaning solutions to meet the unique
              needs of our residential, office, and commercial clients.
            </p>
          </div>
        </div>
        <Service />
        <p className="tracking-[1.5] leading-6  my-[2rem] font-bold text-[1.2rem] lg:text-[1.4rem] text-center uppercase mp-4">
          Sweep through our completed projects to get a glimpse of the standard
          of service we deliver.
        </p>
        <PortfolioImages />
      </div>
    </section>
  )
}

export default Portfolio
