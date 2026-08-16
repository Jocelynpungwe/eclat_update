import React from 'react'
import work1 from '@/public/images/work1.jpg'
import work2 from '@/public/images/work2.jpg'
import work6 from '@/public/images/work6.jpg'
import Image from 'next/image'

const AboutImage = () => {
  return (
    <article className="grid grid-cols-2 grid-rows-[240px_240px] gap-[0.5rem] ">
      <div className="bg-[var(--secondary-color)] text-white font-bold flex items-center justify-start text-left px-[2rem] ">
        <p className="lg:text-[1.2rem]">Quality is our priority</p>
      </div>
      <div className="w-[100%] h-[100%]">
        <Image
          src={work1}
          alt="dirty room filled with garbage"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="w-[100%] h-[100%]">
        <Image
          src={work2}
          alt="eclat service cleaning the room filled with garbage"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="w-[100%] h-[100%]">
        <Image
          src={work6}
          alt="room that was filled with garbage is now cleaned"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </article>
  )
}

export default AboutImage
