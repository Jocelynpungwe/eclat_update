import { StaticImageData } from 'next/image'
import { Target } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Trophy } from 'lucide-react'

export type CoreType = {
  id: number
  img: string
  title: string
  desc: string
}

export const coreValues: CoreType[] = [
  {
    id: 1,
    img: 'first image',
    title: 'Mission',
    desc: 'the mission',
  },
  {
    id: 2,
    img: 'second image',
    title: 'vision',
    desc: 'the vision',
  },
  {
    id: 3,
    img: 'three image',
    title: 'efficient',
    desc: 'the efficient',
  },
]

export type MissionType = {
  id: number
  icon: React.JSX.Element
  title: string
  desc: string
}

export const coreMission: MissionType[] = [
  {
    id: 1,
    icon: <Target />,
    title: 'Mission',
    desc: 'To provide exceptional, reliable, and customer-focused cleaning services, ensuring high-quality solutions for apartments, offices, and shopping centers, while always prioritizing client satisfaction and care.',
  },
  {
    id: 2,
    icon: <Eye />,
    title: 'Vision',
    desc: 'To build lasting relationships with our customers based on trust, professionalism, and exceptional service. We aim to be a company that clients rely on for consistent, high-quality cleaning solutions, creating environments that promote well-being and peace of mind.',
  },
  {
    id: 3,
    icon: <Trophy />,
    title: 'Objectives',
    desc: 'Our objective is to provide top-quality cleaning services that exceed expectations, build lasting customer relationships based on trust, and expand our reach across Canada. We are committed to continuous growth and training to maintain the highest industry standards.',
  },
]

import floor1 from '@/public/images/floor1.jpg'
import floor2 from '@/public/images/floor2.jpg'
import floor3 from '@/public/images/floor3.jpg'
import kitchen1 from '@/public/images/kitchen1.jpg'
import kitchen2 from '@/public/images/kitchen2.jpg'
import kitchen3 from '@/public/images/kitchen3.jpg'
import kitchen4 from '@/public/images/kitchen4.jpg'
import kitchen5 from '@/public/images/kitchen5.jpg'
import kitchen6 from '@/public/images/kitchen6.jpg'
import shower1 from '@/public/images/shower1.jpg'
import shower2 from '@/public/images/shower2.jpg'
import toilet1 from '@/public/images/toilet1.jpg'
import toilet2 from '@/public/images/toilet2.jpg'
import work1 from '@/public/images/work1.jpg'
import work2 from '@/public/images/work2.jpg'
import work3 from '@/public/images/work3.jpg'
import work4 from '@/public/images/work4.jpg'
import work6 from '@/public/images/work6.jpg'
import com1 from '@/public/images/com-1.jpg'
import com2 from '@/public/images/com-2.jpg'
import com3 from '@/public/images/com-3.jpg'

export type PortfolioImgType = {
  id: number
  image: StaticImageData[]
}

export const porfolioImg: PortfolioImgType[] = [
  { id: 0, image: [com1, com2, com3] },
  {
    id: 1,
    image: [work1, work2, work3, work4, work6],
  },
  {
    id: 4,
    image: [shower1, shower2],
  },
  {
    id: 5,
    image: [toilet1, toilet2],
  },
  { id: 2, image: [floor1, floor2, floor3] },
  {
    id: 3,
    image: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6],
  },
]

export type ServiceType = {
  icon: StaticImageData
  service: string
  desc: string
  alt: string
}

import comImg from '@/public/images/about-serv-1.jpg'
import resImg from '@/public/images/about-serv-4.jpg'
import premImg from '@/public/images/about-serv-3.jpg'
export const ourService: ServiceType[] = [
  {
    icon: comImg,
    service: 'Commercial Cleaning',
    desc: 'Our skilled team specializes in regular cleaning for commercial spaces such as grocery stores, retail shops, and shopping malls.',
    alt: 'sanitizer yellow glove with blue sponge and cleaning product',
  },
  {
    icon: resImg,
    service: 'Residential Cleaning',
    desc: 'We offer both regular and deep cleaning services for apartments, ensuring every corner of your home is spotless. Our services include cleaning floors, carpets, refrigerators, appliances, toilets, and all living spaces, creating a fresh and inviting environment.',
    alt: 'blue vacumm cleaner cleaning a white carpet',
  },
  {
    icon: premImg,
    service: 'Cleaning of professional premises',
    desc: 'We provide tailored cleaning solutions for offices, embassies, and other professional spaces, offering both regular and deep cleaning services.',
    alt: 'resturant being cleaned',
  },
]
