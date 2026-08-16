import React from 'react'
import AboutImage from '../AboutImage'
import AboutUs from '../AboutUs'

const BriefInfo = () => {
  return (
    <section id="about" className="container py-[4rem]">
      <div className="grid md:grid-cols-2 md:gap-x-12">
        <div className="order-2 md:order-1 mb-[3rem]">
          <AboutImage />
        </div>
        <div className="order-1 mb-[3rem] md:order-2">
          <AboutUs />
        </div>
      </div>
    </section>
  )
}

export default BriefInfo
