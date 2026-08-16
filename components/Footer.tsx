'use client'

import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/utils/links'
import Logo from './header/Logo'
import {
  PhoneCall,
  MailOpen,
  Instagram,
  Facebook,
  ArrowUpRight,
  Sparkles,
  MapPin,
  ArrowRight,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[var(--dark)] text-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-teal-400/5
          blur-3xl
        "
      />

      <div className="container relative z-10">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            gap-10
            py-14
            sm:py-16
            lg:grid-cols-12
            lg:gap-12
            lg:py-18
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-5">
            {/* Logo */}

            <div className="inline-block">
              <Logo />
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-white/55
                sm:text-base
              "
            >
              We&apos;re not just a cleaning company. We&apos;re your partner in
              creating cleaner, healthier, and more vibrant spaces for your home
              or business.
            </p>

            {/* CTA */}

            <Link
              href="/booking"
              className="
                group
                mt-6
                inline-flex
                min-h-[48px]
                items-center
                gap-2.5
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[var(--dark)]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-50
                hover:shadow-xl
              "
            >
              Book a Cleaning
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-cyan-300" />

              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                Explore
              </h4>
            </div>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      text-white/55
                      transition-all
                      duration-200
                      hover:text-white
                    "
                  >
                    <span>{link.name}</span>

                    <ArrowRight
                      size={13}
                      className="
                        -translate-x-1
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-cyan-300" />

              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                Contact Us
              </h4>
            </div>

            <div className="mt-5 space-y-4">
              {/* EMAIL */}

              <a
                href="mailto:eclactservicecontact@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-3
                  transition-all
                  duration-300
                  hover:border-cyan-300/20
                  hover:bg-white/[0.06]
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <MailOpen size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Email
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      break-all
                      text-sm
                      text-white/65
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    eclactservicecontact@gmail.com
                  </span>
                </span>
              </a>

              {/* PHONE */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-3
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <PhoneCall size={17} />
                </span>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Phone
                  </span>

                  <div className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/65">
                    <a
                      href="tel:8736552430"
                      className="transition-colors hover:text-white"
                    >
                      873 655 2430
                      <span className="ml-1 text-xs text-cyan-300">EN</span>
                    </a>

                    <a
                      href="tel:8734556670"
                      className="transition-colors hover:text-white"
                    >
                      873 455 6670
                      <span className="ml-1 text-xs text-cyan-300">FR</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-3
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <MapPin size={17} />
                </span>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Service Area
                  </span>

                  <span className="mt-0.5 block text-sm text-white/65">
                    Gatineau &amp; Ottawa
                  </span>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/eclatservicedenettoyage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Éclat Services on Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300/40
                  hover:bg-cyan-300/10
                  hover:text-cyan-300
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61569705604156"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Éclat Services on Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300/40
                  hover:bg-cyan-300/10
                  hover:text-cyan-300
                "
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA STRIP
        ====================================================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div>
            <p className="text-sm font-bold text-white">
              Ready for a cleaner space?
            </p>

            <p className="mt-1 text-xs text-white/45 sm:text-sm">
              Get in touch with Éclat Services today.
            </p>
          </div>

          <Link
            href="/booking"
            className="
              group
              inline-flex
              min-h-[42px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-cyan-300/30
              px-5
              py-2.5
              text-xs
              font-bold
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-300
              hover:bg-cyan-300
              hover:text-[var(--dark)]
              sm:w-auto
            "
          >
            Get Started
            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/10 py-6">
          <div
            className="
              flex
              flex-col
              gap-3
              text-xs
              text-white/35
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>© 2026 Éclat Services de Nettoyage. All rights reserved.</p>

            <p>Gatineau • Ottawa</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
