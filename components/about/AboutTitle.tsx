import React from 'react'
type TitleProps = {
  title: string
  desc: string
  textColor?: string
}
const AboutTitle = ({ title, desc, textColor }: TitleProps) => {
  return (
    <div>
      <div className="flex gap-[0.5rem] mb-[0.1rem]">
        <div className="w-[2rem] h-[5px] bg-[var(--secondary-color)]"></div>
        <div className="w-[2rem] h-[5px] bg-[var(--secondary-color)]"></div>
      </div>
      <div className="flex flex-col">
        <h2
          className={`${
            textColor === 'white' ? 'text-white' : 'text-black'
          } text-[1.8rem] lg:text-[2rem] font-bold capitalize `}
        >
          {title}
        </h2>
        <p
          className={`${
            textColor === 'white' ? 'text-white' : 'text-black opacity-45'
          } order-[-1] uppercase mb-[0.1rem] text-[1rem] lg:text-[1.2rem]`}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

export default AboutTitle
