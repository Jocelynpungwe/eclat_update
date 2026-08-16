import React from 'react'

const AboutHistory = () => {
  return (
    <section className=" grid sm:grid-cols-2  gap-8">
      <div className="text-white mt-[2rem] text-left ">
        <h2 className="font-bold text-[1.8rem] lg:text-[2rem] mb-[1rem]">
          History
        </h2>
        <p className=" text-white tracking-[1.5] leading-8 opacity-45 ">
          ESN Cleaning Services was founded with the goal of providing reliable
          and high-quality cleaning solutions to residential and commercial
          clients. With a strong focus on customer satisfaction and
          professionalism, we quickly gained recognition for our attention to
          detail and dedication to excellence. Over the years, we’ve earned
          multiple certifications in various cleaning disciplines, further
          enhancing our expertise and service offerings. As we continue to grow,
          our commitment to delivering exceptional, tailored cleaning services
          remains at the heart of everything we do.
        </p>
      </div>
      <div className="about-bg w-[100%] h-[50vh]"></div>
    </section>
  )
}

export default AboutHistory
