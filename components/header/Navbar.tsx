import React from 'react'
import { navLinks } from '@/utils/links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-7 lg:gap-10">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.link}
                className="relative text-sm font-medium tracking-wide text-slate-700 transition-colors duration-300 hover:text-[var(--primary-color)] lg:text-[15px]"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[var(--secondary-color)] transition-all duration-300 hover:w-full" />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
