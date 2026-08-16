import React from 'react'
import Carousel from './Carousel'
import { porfolioImg } from '@/utils/core'
const PortfolioImages = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-[1rem] justify-center items-center max-w-[900px] mx-auto">
      {porfolioImg.map((items) => {
        return (
          <div key={items.id}>
            <Carousel images={items.image} />
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioImages
