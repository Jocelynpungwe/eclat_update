export type NavLinks = {
  id: number
  name: string
  link: string
}

export const navLinks: NavLinks[] = [
  {
    id: 1,
    name: 'Home',
    link: '/#hero',
  },
  {
    id: 2,
    name: 'About Us',
    link: '/#about',
  },
  {
    id: 3,
    name: 'Our Services',
    link: '/#service',
  },
  {
    id: 4,
    name: 'Prices',
    link: '/price',
  },
  {
    id: 5,
    name: 'Contact Us',
    link: '/#contact',
  },
]
