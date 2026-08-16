'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-bg relative flex min-h-[680px] items-center overflow-hidden pb-20 pt-28 text-white sm:min-h-[720px] sm:pt-32 lg:min-h-[780px] lg:pb-24"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl sm:h-96 sm:w-96"
      />

      {/* Small decorative circles */}
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-[30%] hidden h-3 w-3 rounded-full bg-cyan-300/60 lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-[20%] top-[65%] hidden h-2 w-2 rounded-full bg-white/50 lg:block"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* =================================================
              BADGE
          ================================================== */}

          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={15} className="shrink-0 text-cyan-300" />

            <span>Professional Cleaning Services</span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[1.03] tracking-tight">
            A Cleaner Space.
            <span className="block text-cyan-300">A Better Life.</span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:mt-7 sm:text-base md:text-lg md:leading-8">
            Professional residential and commercial cleaning services designed
            to keep your space fresh, healthy, and spotless.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            {/* Primary */}
            <Link
              href="/booking"
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--dark)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 sm:w-auto sm:px-7 sm:text-base"
            >
              Get Your Free Quote
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary */}
            <Link
              href="#services"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[var(--dark)] sm:w-auto sm:px-7 sm:text-base"
            >
              Explore Our Services
            </Link>
          </div>

          {/* =================================================
              TRUST INDICATORS
          ================================================== */}

          <div className="mt-9 grid grid-cols-1 gap-3 text-sm text-white/80 sm:mt-10 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-x-7">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />

              <span>Professional Service</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />

              <span>Reliable &amp; Thorough</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />

              <span>Residential &amp; Commercial</span>
            </div>
          </div>

          {/* =================================================
              RATING
          ================================================== */}

          <div className="mt-8 flex items-center gap-3 sm:mt-10">
            <div className="flex items-center gap-1">
              <Star size={16} fill="currentColor" className="text-yellow-300" />

              <Star size={16} fill="currentColor" className="text-yellow-300" />

              <Star size={16} fill="currentColor" className="text-yellow-300" />

              <Star size={16} fill="currentColor" className="text-yellow-300" />

              <Star size={16} fill="currentColor" className="text-yellow-300" />
            </div>

            <span className="text-sm text-white/70">
              Trusted cleaning services
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CURVE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-14 w-full rounded-t-[50%] bg-[var(--background)] sm:h-16 lg:h-20"
      />
    </section>
  )
}

export default Hero
