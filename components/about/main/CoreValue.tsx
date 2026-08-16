import React from 'react'
import AboutTitle from '../AboutTitle'
import AboutCore from '../AboutCore'
import AboutHistory from '../AboutHistory'

const CoreValue = () => {
  return (
    <section className="bg-black py-[4rem]">
      <div className="container">
        <div className="grid sm:grid-cols-[250px_1fr] sm:gap-8 mb-8">
          <AboutTitle
            title="Our Core Values"
            desc="Navigating our path with integrity"
            textColor="white"
          />
          <div className="flex items-center justify-center">
            <p className="mt-4 sm:mt-0 text-white tracking-[1.5] leading-8 opacity-45  mb-[1rem] ">
              Like any successful business, we believe in upholding strong core
              values that guide our work and shape our commitment to excellence.
            </p>
          </div>
        </div>
        <AboutCore />
        <AboutHistory />
      </div>
    </section>
  )
}

export default CoreValue
