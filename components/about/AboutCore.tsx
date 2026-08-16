import React from 'react'
import { coreMission } from '../../utils/core'

import Core from './Core'
const AboutCore = () => {
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] md:grid-cols-3 justify-start items-center mb-8 py-20 md:gap-[2rem]">
      {coreMission.map((item) => {
        return (
          <div key={item.id}>
            <Core
              id={item.id}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          </div>
        )
      })}
    </div>
  )
}

export default AboutCore
