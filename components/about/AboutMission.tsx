import React from 'react'
import { coreMission } from '../../utils/core'
import Mission from './Mission'

const AboutMission = () => {
  return (
    <section className="grid  sm:grid-cols-3  gap-y-[1.5rem]">
      {coreMission.map((items) => {
        return (
          <div key={items.id}>
            <Mission
              id={items.id}
              title={items.title}
              icon={items.icon}
              desc={items.desc}
            />
          </div>
        )
      })}
    </section>
  )
}

export default AboutMission
