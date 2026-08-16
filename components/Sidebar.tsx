'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/utils/hooks'
import { openSidebar } from '@/reducer/sidebarSlice'
import { navLinks } from '@/utils/links'
import Link from 'next/link'

import CloseSidebar from './header/CloseSidebar'
import Logo from './header/Logo'
import ContactBtn from './header/ContactBtn'

const Sidebar = () => {
  const { isOpenSidebar } = useAppSelector((store) => store.sidebar)
  const dispatch = useAppDispatch()
  return (
    <aside
      className={`${
        isOpenSidebar
          ? 'fixed top-0 left-0 w-[100%] bg-white transition-all duration-300 ease-in-out md:hidden translate-x-0 z-[999] header-shadow'
          : 'fixed top-0 left-0 w-[100%] bg-white transition-all duration-300 ease-in-out -translate-x-full z-[-1]  md:hidden'
      } `}
    >
      <div className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-slate-100">
        <Logo />
        <CloseSidebar />
      </div>
      <ul className=" bg-gray-300">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.link}
                className="block py-[0.8rem] px-[1.5rem] hover:py-4 hover:px-6 pl-8 text-left font-[500] tracking-wider hover:border-b-[0.15rem] hover:border-[var(--secondary-color)] transition-all ease-in-out duration-300"
                onClick={() => dispatch(openSidebar())}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div
        className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-slate-100"
        onClick={() => dispatch(openSidebar())}
      >
        <ContactBtn />
      </div>
    </aside>
  )
}

export default Sidebar
