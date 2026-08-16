import React from 'react'
import { type MissionType } from '../../utils/core'

const Mission = ({ title, icon, desc }: MissionType) => {
  return (
    <article className="py-[2.5rem] px-[2rem] bg-neutral-100 text-center rounded-[3px]">
      <span className="w-[4rem] h-[4rem] grid mx-auto place-items-center rounded-[50%] text-[2rem] text-[var(--secondary-color)] bg-black">
        {icon}
      </span>
      <h3 className="text-black capitalize text-[1rem] font-bold my-[1rem]">
        {title}
      </h3>
      <p className="text-black opacity-[0.75]">{desc}</p>
    </article>
  )
}

export default Mission
