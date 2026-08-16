import React from 'react'
import { Check } from 'lucide-react'

import Link from 'next/link'
type PriceType = {
  title?: string
  price?: string
  desc: string
  list: string[]
}

const PriceDisplay = ({ title, price, desc, list }: PriceType) => {
  return (
    <article className="header-shadow  py-8 px-8 flex flex-col justify-between items-center">
      {title && (
        <h3 className="text-[1.3rem] uppercase font-bold  my-4">{title}</h3>
      )}
      {price && (
        <span className="text-[1.3rem] uppercase font-bold">{price}</span>
      )}
      <p className="italic my-4 text-[1rem]">{desc}</p>
      {title ? (
        <div className="mb-8">
          {list.map((item) => {
            return (
              <div key={item} className="flex gap-[0.5rem] mb-[0.5rem]">
                <Check />
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      ) : (
        <div className=" mb-4">
          {list.map((item) => {
            const listName = item.split(':')
            return (
              <div
                key={item}
                className="flex justify-between gap-[1rem] mb-[0.5rem]"
              >
                <Check />
                <p>{listName[0]}</p>
                <p className="font-bold">{listName[1]}</p>
              </div>
            )
          })}
        </div>
      )}

      <Link
        href="https://clienthub.getjobber.com/client_hubs/44a6a7a5-0f32-415b-ad8e-ed5d4233c4f9/public/work_request/new?source=social_media"
        className="py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
      >
        Book Now
      </Link>
    </article>
  )
}

export default PriceDisplay
