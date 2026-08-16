'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Pricing', href: '/price' },
  { name: 'Contact', href: '/#contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-3 w-[94%] max-w-[1400px] sm:mt-4">
          <div className="relative flex min-h-[68px] items-center justify-between rounded-2xl border border-white/60 bg-white/90 px-4 shadow-[0_12px_40px_rgba(11,31,42,0.10)] backdrop-blur-xl sm:px-5 md:min-h-[74px] md:px-6">
            {/* =========================
                LOGO
            ========================== */}
            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-10 flex shrink-0 items-center"
              aria-label="Éclat Services de Nettoyage - Home"
            >
              <Image
                src="/images/logo-eclat.png"
                alt="Éclat Services de Nettoyage"
                width={80}
                height={80}
                priority
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-5 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex py-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-[var(--primary)] lg:text-[15px]"
                    >
                      {link.name}

                      <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[var(--secondary)] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* =========================
                DESKTOP CTA
            ========================== */}
            <Link
              href="/booking"
              className="group hidden items-center gap-2 rounded-full bg-[var(--dark)] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary)] md:inline-flex lg:px-6"
            >
              Book a Cleaning
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--dark)] text-white transition-all duration-300 hover:bg-[var(--primary)] md:hidden"
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={23} strokeWidth={2} />
              ) : (
                <Menu size={23} strokeWidth={2} />
              )}
            </button>
          </div>

          {/* =========================
              MOBILE NAVIGATION
          ========================== */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? 'mt-2 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_15px_40px_rgba(11,31,42,0.12)]">
              <nav>
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="flex min-h-[48px] items-center rounded-xl px-4 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-[var(--primary)]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <Link
                href="/booking"
                onClick={closeMenu}
                className="mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--dark)] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--primary)]"
              >
                Book a Cleaning
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE MENU BACKDROP
      ========================== */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
        />
      )}
    </>
  )
}

export default Header
