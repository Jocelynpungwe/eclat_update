'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const ContactBtn = () => {
  return (
    <Link
      href="/booking"
      className="group inline-flex items-center gap-2 rounded-full bg-[var(--dark)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-color)]"
    >
      Book a Cleaning
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  )
}

export default ContactBtn
